const filesystem = {
  Desktop: {
    Projects: {
      "Fraud-Detection-Payment-System": {
        type: "project",
        status: "Banking Backend Project",
        tech: "Spring Boot, Java, MySQL",
        description:
          "Backend payment processing system simulating real-world banking workflows with fraud detection logic.",
        features: [
          "High-value transaction detection",
          "Rapid transaction pattern checks",
          "Secure REST APIs",
          "MySQL transaction storage",
        ],
        github:
          "https://github.com/DharunikaHari-98/fraud-payment-system",

      },

      "Distributed-Rate-Limiter": {
        type: "project",
        status: "System Design Project",
        tech: "Java, Spring Boot, Token Bucket Algorithm",
        description:
          "Thread-safe distributed rate limiter built to control traffic spikes in high-load systems.",
        features: [
          "Token Bucket Algorithm",
          "Thread-safe request control",
          "Traffic spike handling",
          "Scalable backend design",
        ],
        github:
          "https://github.com/DharunikaHari-98/distributed-rate-limiter",

      },

      "URL-Shortener-Service": {
        type: "project",
        status: "Backend Project",
        tech: "Spring Boot, Java, MySQL",
        description:
          "Backend URL shortener service with fast redirection, validation, and scalable storage design.",
        features: [
          "Short URL generation",
          "O(1) lookup architecture",
          "Fast redirection",
          "Validation and access control",
        ],
        github:
          "https://github.com/DharunikaHari-98/URL_shortener",

      },
      "Organ-Donation-Management": {
        type: "project",
        status: "Full Stack Healthcare Project",
        tech: "React, Spring Boot, MySQL",
        description:
          "Organ donation management system with donor registration, recipient tracking, hospital management, organ matching, request approval, and admin oversight.",
        features: [
          "Donor and recipient management",
          "Organ matching and allocation",
          "Hospital validation workflow",
          "Request and approval system",
          "Admin reporting dashboard",
        ],
        github:
          "https://github.com/DharunikaHari-98/OrganDonationManagement",
        live:
          "https://github.com/DharunikaHari-98/OrganDonationManagement",
      },

      "macOS-Portfolio": {
        type: "project",
        status: "Current Portfolio Project",
        tech: "React, Tailwind CSS, Zustand, Framer Motion",
        description:
          "Interactive macOS-inspired developer portfolio with Finder, Terminal, Safari, Dock, App Store, GitHub API, and draggable windows.",
        features: [
          "macOS style desktop",
          "Draggable and resizable windows",
          "Live GitHub profile",
          "Terminal commands",
          "Dock and Launchpad",
        ],
        github:
          "https://github.com/DharunikaHari-98/dharunika-portfolio",

      },
    },

    Resume: {
      type: "file",
      description: "Dharunika Resume.pdf",
    },

    Contact: {
      type: "file",
      description: "Email, LinkedIn, GitHub, and recruiter contact details.",
    },
  },
}

export default filesystem