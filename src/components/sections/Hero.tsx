import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { IconBrandGithub, IconFileCv } from "@tabler/icons-react";
import GlowButton from "@/components/ui/GlowButton";

const ROLE = "Full-Stack Engineer · MERN & CMS Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10"
    >
      <div className="grid-fade absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink-dim"
          >
            <span className="h-2 w-2 rounded-full bg-[#2ee6a6] shadow-[0_0_8px_#2ee6a6]" />
            available for opportunities
          </motion.div>

         

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl font-mono text-sm text-ink-dim sm:text-base"
          >
            <span className="text-red">$</span> whoami
          
          </motion.p>

 <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-6xl"
          >
            I'm <span className="text-cyan text-glow-cyan">Atyan Shahid.</span>

             
          </motion.h1>
 <br />
            <span className={typed.length < ROLE.length ? "caret" : ""}>
              {typed}
            </span>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 max-w-xl text-base text-ink-dim sm:text-lg"
          >
            MERN Stack Web & App Developer passionate about building modern,
            responsive, and scalable web and mobile applications. Skilled in
            React, React Native, Node.js, Express, and MongoDB, with a focus on
            creating clean, user-friendly digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <GlowButton href="#experience">
              View work <ArrowDownRight className="h-4 w-4" />
            </GlowButton>
            <GlowButton href="https://github.com/Atyan-Malik" variant="outline">
              <IconBrandGithub className="h-4 w-4" /> GitHub
            </GlowButton>
            <GlowButton variant="outline" className="h-10 px-4">
              <a
                href="https://drive.google.com/file/d/1IUa20HD5oQtp3TR3HMDnSDbR9rjYRmHJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-2"
              >
                <IconFileCv className="h-4 w-4" />
                <span>My CV</span>
              </a>
            </GlowButton>
          </motion.div>
        </div>

      <motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="
    relative
    rounded-2xl
    p-[1px]
    bg-gradient-to-br
    from-cyan/70
    via-line
    to-red/60
    shadow-[0_0_25px_rgba(0,229,255,0.12)]
  "
>
  <div className="overflow-hidden rounded-[15px] bg-panel">
    <img
      src="./myimg2.png"
      alt="Profile"
      className="h-full w-full object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}
