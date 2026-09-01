
import { Mail } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/data/social";

const ICONS = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  mail: Mail,
  instagram: IconBrandInstagram,
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Copyright */}
        <p className="text-center font-mono text-sm text-ink-faint sm:text-left">
          &copy; {new Date().getFullYear()} — Developed by{" "}
          <span className="text-cyan">Atyan Shahid</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pr-16 sm:pr-16">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.icon as keyof typeof ICONS];

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-ink-dim transition-all duration-300 hover:-translate-y-1 hover:text-cyan"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}