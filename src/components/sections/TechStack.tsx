import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/data/techstack";
import { cn } from "@/lib/utils";

export default function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// market watch" title="Tech stack" />

        <div className="grid gap-4 sm:grid-cols-2">
          {TECH_STACK.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="panel clip-corner p-5"
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm font-bold text-ink">{group.ticker}</span>
                  <span className="text-sm text-ink-dim">{group.label}</span>
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1 font-mono text-xs",
                    group.direction === "up" ? "ticker-up" : "ticker-down"
                  )}
                >
                  {group.direction === "up" ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  {group.change}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-line px-3 py-1.5 font-mono text-xs text-ink-dim transition-colors hover:border-cyan/60 hover:text-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
