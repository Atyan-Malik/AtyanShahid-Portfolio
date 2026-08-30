import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Section header styled like a log entry: a bracketed mono "tag" line
 * above a large display heading with a short cyan underscore accent.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-3xl font-bold text-ink">
        {title}
      </h2>
      <span className="mt-4 block h-[3px] w-14 bg-red" />
    </motion.div>
  );
}
