import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/index";
import { textVariant, fadeIn } from "../ui/motion";
import { AnimatedPinDemo } from "./AnimatedPinDemo";
import { styles } from "../../styles";

const Works = () => {
  return (
    <>
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#00e5ff]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <motion.div
        variants={textVariant()}
        className="relative z-10"
      >
        <motion.p
          className={`${styles.sectionSubText} relative inline-block`}
        >
          My work

          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] bg-[#ff2d55]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>

        {/* Decorative elements */}
        <motion.div
          className="mt-4 flex items-center gap-2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="h-2 w-2 rounded-full bg-[#00e5ff]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="h-[2px] w-16 bg-gradient-to-r from-[#00e5ff] to-transparent" />

          <motion.div
            className="h-2 w-2 rounded-full bg-[#00e5ff]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Description */}
      <div className="relative z-10 flex w-full">
        <motion.div
          variants={fadeIn("", "tween", 0.1, 1)}
          className="relative mt-8 pl-6"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#00e5ff] via-[#00e5ff] to-transparent" />

          <p className="max-w-3xl text-[17px] leading-[30px] text-secondary">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different
            technologies, and manage projects effectively.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <motion.div
        className="relative z-10 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AnimatedPinDemo />
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        className="relative z-10 mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");