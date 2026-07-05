import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001
  });

  return <motion.div className="scroll-progress-bar" style={{ scaleX }} />;
}

export default ScrollProgress;
