export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "instagram";
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Atyan-Malik", icon: "github" },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/atyan-shahid-", icon: "linkedin" },
  { label: "Email", href: "atyanshahid@gmail.com", icon: "mail" },
  { label: "Instagram", href: "https://www.instagram.com/atyan._.developer/", icon: "instagram" },
];
