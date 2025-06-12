import sgMail from '@sendgrid/mail';
import { siteSettings } from '@shared/settings';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string | null | undefined;
  projectType: string;
  budget: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent to:', siteSettings.company.contactFormRecipient);
    console.log('Contact form data:', data);
    return true; // Simulate success for now
  }

  try {
    const msg = {
      to: siteSettings.company.contactFormRecipient,
      from: siteSettings.company.email,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${data.projectType}</p>
            <p><strong>Budget Range:</strong> ${data.budget}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            This email was sent from the ${siteSettings.company.name} contact form.
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}