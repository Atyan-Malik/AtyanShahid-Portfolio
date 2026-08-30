export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  summary: string;
  points: string[];
  tag: "work" | "project" | "education";
}

export const EXPERIENCE: ExperienceItem[] = [
{
  role: "Full-Stack Engineering Intern",
  org: "Zynvex Solutions",
  date: "2026 — Present",
  summary:
    "Working across the frontend and backend to develop scalable, production-ready web applications using the MERN stack.",
  points: [
    "Develop full-stack features using React, Node.js, Express.js, and MongoDB",
    "Design and integrate RESTful APIs with authentication, authorization, validation, and database operations",
    "Build responsive, reusable frontend components and connect them with backend services",
    "Debug production issues, optimize application performance, and collaborate through Git-based development workflows",
  ],
  tag: "work",
},
 {
  role: "Backend Software Engineer Intern",
  org: "PRAQEN — P2P Bitcoin Trading Platform",
  date: "2026",
  summary:
    "Backend engineering work on a live peer-to-peer Bitcoin trading platform, focused on APIs, authentication, trading workflows, and reliable user services.",
  points: [
    "Developed and maintained REST APIs for authentication, users, listings, trades, wallets, and notifications",
    "Implemented and debugged JWT authentication, authorization, user registration, login, and account-related workflows",
    "Worked with MongoDB/Mongoose data models for users, trades, wallets, transactions, and platform services",
    "Built and improved notification workflows, including user preferences, unread states, and real-time frontend integration",
    "Debugged production issues involving API responses, CORS, JWT tokens, database schemas, and frontend-backend integration",
  ],
  tag: "work",
},
 {
  role: "Freelance Full-Stack Developer",
  org: "Independent",
  date: "January 2025 — Present",
  summary:
    "Building and delivering full-stack web applications using the MERN stack, from frontend architecture and APIs to databases, authentication, and deployment.",
  points: [
    "Developed eCommerce and business applications with React, responsive layouts, dynamic content, filtering, and interactive user experiences",
    "Created Node.js and Express.js REST APIs backed by MongoDB/Mongoose for authentication, users, products, courses, and application workflows",
    "Integrated third-party services and APIs while resolving real-world frontend, backend, database, and deployment issues",
  ],
  tag: "work",
},

 {
  role: "Full-Stack Engineer",
  org: "freeCodeCamp + Stanford Online",
  date: "2024 — Present",
  summary:
    "Developed full-stack engineering expertise through structured computer science and web development coursework, reinforced by extensive hands-on project development.",
  points: [
    "Completed structured coursework through freeCodeCamp and Stanford Online covering programming fundamentals, web & App development, and full-stack engineering",
    "Built strong practical expertise in the MERN stack — React, React-native, Node.js, Express.js, MongoDB — along with REST APIs, authentication, and database-driven applications",
    "Applied learned concepts by designing and developing 7+ full-stack projects across eCommerce, online learning, real estate, tourism, dashboards, and business applications",
    "Developed production-oriented skills in Git, Docker, GitHub Actions (CI/CD), API integration, responsive UI development, debugging, testing, and deployment workflows",
  ],
  tag: "education",
},
]
