import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/index";
import { AnimatedPinDemo } from "./AnimatedPinDemo";
import { styles } from "../../styles";


const Works = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
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

      {/* Everything below stays above particles */}
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className={`${styles.sectionSubText} relative inline-block`}
          >
            My work

            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#ff2d55]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.p>

          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Projects.
          </h2>

          {/* Decorative elements */}
          <motion.div
            className="mt-4 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
        <motion.div
          className="relative z-10 flex w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative mt-8 w-full pl-5 sm:pl-6">
            <div className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#00e5ff] via-[#00e5ff] to-transparent" />

            <p className="w-full max-w-3xl text-[14px] leading-6 text-secondary sm:text-[17px] sm:leading-[30px]">
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos. It reflects my
              ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="relative z-10 mt-12 w-full sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedPinDemo />
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="relative z-10 mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </div>
    </div>
  );
};


export default SectionWrapper(Works, "projects");