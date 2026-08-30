export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];
