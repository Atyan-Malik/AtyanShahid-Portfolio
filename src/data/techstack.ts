export interface TechGroup {
  label: string;
  ticker: string;
  change: string;
  direction: "up" | "down";
  items: string[];
}

export const TECH_STACK: TechGroup[] = [
  {
    label: "Frontend",
    ticker: "FE",
    change: "+4.2%",
    direction: "up",
    items: ["HTML5", "CSS3", "javascript" , "TypeScript", "React", "Redux Toolkit", "Next.js", "React Native", "Expo", "Firebase", "Tailwind CSS"],
  },
  {
    label: "Backend",
    ticker: "BE",
    change: "+3.1%",
    direction: "up",
    items: ["Node.js", "Express.js", "Django", "Supabase", "REST APIs", "Authentication (JWT/Bcrypt)", "OAuth", "Socket.IO", "Multer", "Stripe"],
  },
  {
    label: "Data",
    ticker: "DB",
    change: "+2.6%",
    direction: "up",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    label: "Tools , Infra & Deployment",
    ticker: "OPS",
    change: "+2.4%",
    direction: "up",
    items: ["Docker", "Android Studio", "Xcode", "Expo EAS", "CI/CD", "Vercel",  "Git","Prometheus","Grafana","Linux Basics","Postman", "AI Tools (ChatGPT, Claude, Gemini)."],
  },
];
