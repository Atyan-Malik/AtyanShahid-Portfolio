import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
}

/** Primary CTA button: solid cyan or outlined, with a clipped corner for a terminal/HUD feel. */
export default function GlowButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: GlowButtonProps) {
  const classes = cn(
    "clip-corner group relative inline-flex items-center gap-2 px-6 py-3",
    "font-mono text-sm font-medium tracking-wide transition-all duration-300",
    variant === "solid" &&
      "bg-cyan text-void hover:shadow-[0_0_28px_rgba(0,229,255,0.55)]",
    variant === "outline" &&
      "border border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
