// Website configuration settings
export const siteSettings = {
  // GitHub Integration
  github: {
    username: "Devansh-14971",
    profileUrl: "https://github.com/Devansh-14971"
  },

  // Company Information
  company: {
    name: "DevTeam Pro",
    tagline: "Professional Web Development",
    description: "Creating exceptional web experiences that drive business growth and user engagement.",
    email: "hello@devteampro.com",
    projectsEmail: "projects@devteampro.com",
    contactFormRecipient: "contact@devteampro.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zip: "94105"
    }
  },

  // Team Members
  team: [
    {
      name: "Devansh Banga",
      role: "Lead Developer",
      image: "https://live.staticflickr.com/65535/54595066637_94a30764d3_w.jpg",
      bio: "Full-stack developer with expertise in React, Node.js, and modern web technologies. Passionate about creating scalable solutions and leading innovative projects.",
      description: "Full-stack expert with 5+ years of experience in React and Node.js",
      socials: {
        linkedin: "www.linkedin.com/in/devansh-banga-272147265",
        github: "https://github.com/Devansh-14971",
      }
    },
    {
      name: "Rounak Banga",
      role: "UX/UI Designer",
      image: "https://live.staticflickr.com/65535/54595066647_9bdc82a1cf_z.jpg",
      bio: "Creative designer focused on user-centered design and accessibility. Specializes in creating intuitive interfaces that enhance user experience and drive engagement.",
      description: "Creative designer focused on user-centered design and accessibility",
      socials: {
        linkedin: "https://www.linkedin.com/in/rounak-banga-7983b9330",
      }
    },
  ],

  // Projects Portfolio
  projects: [
    {
      title: "Hyperbolic Web Store",
      category: "Shopify based E-commerce",
      description: "Hyperbolic is a refined Shopify storefront designed to elevate luxury fashion online. Its deep purple theme and bold typography create a distinctive identity, while smooth navigation, responsive layouts, and curated product showcases provide an intuitive shopping experience. With an integrated payment gateway, real-time pricing, and secure checkout, the site balances style and functionality. Every element—from layout to color selection—conveys modern elegance, serving as both a functional eCommerce platform and a stylistic demonstration of thoughtful, polished web development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "HTML"],
      liveUrl: "https://egfw45-qa.myshopify.com/",
      githubUrl: "N/a"
    },
    {
      title: "Get Quote",
      category: "Industrial E-commerce",
      description: "A basic 'Get Quote' website streamlines customer inquiries by letting visitors quickly request pricing or service estimates. It enhances lead generation, showcases professionalism, and reduces response time with automated forms. By collecting key details like service type, quantity, and contact info, it empowers businesses to respond faster, close more deals, and build trust. It can also integrate with CRMs, trigger email alerts, and offer analytics to improve conversion rates. Whether you're a startup or a growing enterprise, it turns interest into opportunity—efficiently.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "HTML"],
      liveUrl: "https://website-template-7ohi.onrender.com",
      githubUrl: "https://github.com/Devansh-14971/Present"
    },
    {
      title: "Get Quote",
      category: "Pharmaceuticals E-commerce",
      description: "A pharmacy 'Get Quote' website lets customers request prices for medicines or bulk orders quickly. It boosts trust, speeds up response time, and captures key details like dosage and quantity. Integrated alerts and CRM tools help pharmacies serve better, convert leads, and manage orders efficiently.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "HTML"],
      liveUrl: "https://website-template-2.onrender.com/",
      githubUrl: "https://github.com/Devansh-14971/Website_template"
    }
  ],

  // Social Media Links
  social: {
    linkedin: "www.linkedin.com/in/devansh-banga-272147265",
    github: "https://github.com/Devansh-14971",
  },

  // Services
  services: [
    "Web Development",
    "Mobile Apps", 
    "UI/UX Design",
    "Consulting",
    "DevOps & Cloud",
    "API Development"
  ]
};

export type TeamMember = typeof siteSettings.team[0];
export type Project = typeof siteSettings.projects[0];