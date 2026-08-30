import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT } from "@/data/about";
import Tilt from "react-parallax-tilt";
import { Star } from "lucide-react";

export default function About() {
  return (
 
      <section
  id="about"
  className="relative px-6 pt-24 pb-10 sm:px-10 sm:pb-12"
>
    
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.heading}
        />

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start lg:gap-12">

          {/* =========================
              ABOUT CONTENT
          ========================== */}
          <div className="space-y-5">

            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="text-base leading-relaxed text-ink-dim sm:text-lg"
              >
                {p}
              </motion.p>
            ))}

            {/* Let's Talk */}
            <div className="pt-2">
              <a
                href="#contact"
                className="
                  inline-block
                  clip-corner
                  border
                  border-red/60
                  px-4
                  py-3
                  font-mono
                  text-sm
                  text-red
                  transition-all
                  hover:bg-red/10
                "
              >
                Let's talk
              </a>
            </div>
          </div>

          {/* =========================
              CORE STRENGTHS
          ========================== */}
          <Tilt
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            glareEnable
            glareMaxOpacity={0.08}
            glareColor="#00e5ff"
            className="
              panel
              clip-corner
              p-6
              md:-mt-4
              lg:-mt-8
            "
          >
            {/* Card Heading */}
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-cyan" />

              <span className="font-mono text-sm text-ink">
                Core Strengths
              </span>
            </div>

            {/* Strengths */}
            <div className="mt-4 space-y-3">
              {ABOUT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-line
                    pb-3
                  "
                >
                  <span className="font-mono text-sm text-ink-dim">
                    {stat.label}
                  </span>

                  <span className="text-right font-mono text-sm font-medium text-cyan">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
}