import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, TerminalSquare } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <TerminalSquare className="h-5 w-5 text-cyan" />
          Atyan<span className="text-red">.</span>Dev
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={cn(
                  "font-mono text-sm tracking-wide transition-colors",
                  activeId === link.id ? "text-cyan text-glow-cyan" : "text-ink-dim hover:text-ink"
                )}
              >
                {activeId === link.id ? `> ${link.label}` : link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="clip-corner border border-red/60 px-4 py-2 font-mono text-sm text-red transition-colors hover:bg-red/10"
            >
              Let's talk
            </a>
          </li>
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-void/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-base text-ink-dim hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
