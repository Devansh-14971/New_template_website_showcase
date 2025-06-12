import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Send email notification
      const emailSent = await sendContactEmail(validatedData);
      
      // Store in database
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        contact,
        emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  // GitHub proxy to avoid CORS issues
  app.get("/api/github/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API responded with status: ${response.status}`);
      }
      
      const userData = await response.json();
      res.json(userData);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch GitHub profile",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
