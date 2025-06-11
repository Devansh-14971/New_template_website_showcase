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
      name: "Devansh Patel",
      role: "Lead Developer & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Full-stack developer with expertise in React, Node.js, and modern web technologies. Passionate about creating scalable solutions and leading innovative projects.",
      description: "Full-stack expert with 5+ years of experience in React and Node.js",
      socials: {
        linkedin: "https://linkedin.com/in/devansh-patel",
        github: "https://github.com/Devansh-14971",
        twitter: "https://twitter.com/devansh_dev"
      }
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c825?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Creative designer focused on user-centered design and accessibility. Specializes in creating intuitive interfaces that enhance user experience and drive engagement.",
      description: "Creative designer focused on user-centered design and accessibility",
      socials: {
        linkedin: "https://linkedin.com/in/sarah-chen-design",
        dribbble: "https://dribbble.com/sarahchen",
        behance: "https://behance.net/sarahchen"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Backend specialist with extensive experience in cloud architecture and DevOps. Expert in building scalable, secure systems using modern technologies and best practices.",
      description: "DevOps and cloud architecture specialist with AWS and Docker expertise",
      socials: {
        linkedin: "https://linkedin.com/in/marcus-rodriguez",
        github: "https://github.com/marcus-dev"
      }
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Experienced project manager specializing in Agile methodologies. Ensures smooth project delivery and excellent client communication throughout the development process.",
      description: "Agile methodology expert ensuring smooth project delivery and team coordination",
      socials: {
        linkedin: "https://linkedin.com/in/emma-thompson-pm",
        twitter: "https://twitter.com/emma_pm_pro"
      }
    }
  ],

  // Projects Portfolio
  projects: [
    {
      title: "EcoShop Platform",
      category: "E-commerce",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, order tracking, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecoshop-demo.render.com",
      githubUrl: "https://github.com/Devansh-14971/ecoshop-platform"
    },
    {
      title: "TaskFlow Dashboard",
      category: "Productivity",
      description: "Comprehensive project management tool with real-time collaboration, time tracking, and advanced analytics. Built for remote teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "https://taskflow-app.render.com",
      githubUrl: "https://github.com/Devansh-14971/taskflow-dashboard"
    },
    {
      title: "SocialMetrics Pro",
      category: "Analytics",
      description: "Advanced social media analytics platform with AI-powered insights, automated reporting, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "Python", "Redis", "TensorFlow"],
      liveUrl: "https://socialmetrics-pro.render.com",
      githubUrl: "https://github.com/Devansh-14971/socialmetrics-pro"
    },
    {
      title: "FitTracker Mobile",
      category: "Health",
      description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics. PWA with offline capabilities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["React Native", "Express", "PostgreSQL", "PWA"],
      liveUrl: "https://fittracker-mobile.render.com",
      githubUrl: "https://github.com/Devansh-14971/fittracker-mobile"
    },
    {
      title: "CryptoTrader Bot",
      category: "Finance",
      description: "Automated cryptocurrency trading bot with machine learning algorithms, risk management, and real-time market analysis.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["Python", "TensorFlow", "WebSocket", "REST API"],
      liveUrl: "https://cryptotrader-bot.render.com",
      githubUrl: "https://github.com/Devansh-14971/crypto-trader-bot"
    },
    {
      title: "WeatherViz Dashboard",
      category: "Data Visualization",
      description: "Interactive weather visualization dashboard with real-time data, forecasting, and beautiful charts. Features location-based weather tracking.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "D3.js", "Express", "Weather API"],
      liveUrl: "https://weatherviz-dashboard.render.com",
      githubUrl: "https://github.com/Devansh-14971/weather-viz"
    }
  ],

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/company/devteampro",
    github: "https://github.com/Devansh-14971",
    twitter: "https://twitter.com/devteampro",
    dribbble: "https://dribbble.com/devteampro"
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