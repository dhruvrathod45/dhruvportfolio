import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const roles = ["FULL STACK DEVELOPER", "BACKEND ARCHITECT", "SOFTWARE ENGINEER"];

function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Loop
  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentFullRole.substring(0, typedRole.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentFullRole.substring(0, typedRole.length + 1));
      }, 100);
    }

    if (!isDeleting && typedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedRole === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  // Magnetic button logic
  const exploreBtnRef = useRef(null);
  const resumeBtnRef = useRef(null);

  const exploreX = useMotionValue(0);
  const exploreY = useMotionValue(0);
  const resumeX = useMotionValue(0);
  const resumeY = useMotionValue(0);

  const springExploreX = useSpring(exploreX, { stiffness: 150, damping: 15 });
  const springExploreY = useSpring(exploreY, { stiffness: 150, damping: 15 });
  const springResumeX = useSpring(resumeX, { stiffness: 150, damping: 15 });
  const springResumeY = useSpring(resumeY, { stiffness: 150, damping: 15 });

  const handleMagneticMove = (e, buttonType) => {
    const btn = buttonType === "explore" ? exploreBtnRef.current : resumeBtnRef.current;
    if (!btn) return;

    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    // Limit maximum pull (e.g. max 15 pixels)
    const factor = 0.35;
    if (buttonType === "explore") {
      exploreX.set(x * factor);
      exploreY.set(y * factor);
    } else {
      resumeX.set(x * factor);
      resumeY.set(y * factor);
    }
  };

  const handleMagneticLeave = (buttonType) => {
    if (buttonType === "explore") {
      exploreX.set(0);
      exploreY.set(0);
    } else {
      resumeX.set(0);
      resumeY.set(0);
    }
  };

  // Stagger entry variables
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-role" variants={itemVariants}>
          {typedRole}
          <span className="typewriter-cursor">|</span>
        </motion.p>

        <motion.h1 variants={itemVariants}>
          Engineering
          <br />
          Scalable
          <br />
          <span>Digital Experiences.</span>
        </motion.h1>

        <motion.p className="hero-text" variants={itemVariants}>
          I'm Dhruv Rathod, a B.Tech Computer Science Engineering (Artificial
          Intelligence & Machine Learning) student at Adani University.
          <br /><br />
          I specialize in building modern web applications, scalable backend
          systems and responsive user experiences using React.js, Node.js,
          Express.js, MongoDB and PostgreSQL.
          <br /><br />
          Currently seeking opportunities to contribute, learn and grow as a
          Software Engineer through real-world development experiences.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            ref={exploreBtnRef}
            className="btn-primary"
            style={{ x: springExploreX, y: springExploreY }}
            onMouseMove={(e) => handleMagneticMove(e, "explore")}
            onMouseLeave={() => handleMagneticLeave("explore")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore My Work
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            ref={resumeBtnRef}
            className="btn-secondary"
            style={{ x: springResumeX, y: springResumeY }}
            onMouseMove={(e) => handleMagneticMove(e, "resume")}
            onMouseLeave={() => handleMagneticLeave("resume")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Visual Profile Box on Hero Right */}
      <motion.div 
        className="hero-right"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <div className="profile-container">
          <div className="profile-glow-ring" />
          <div className="profile-inner-ring" />
          
          {/* Main Visual Profile */}
          <div className="profile-avatar-wrapper">
            <div className="profile-mesh" />
            <span className="profile-symbol">DR</span>
          </div>

          {/* Floating tech badges */}
          <div className="floating-tech-icons">
            <div className="tech-icon-wrapper t-1" title="React">
              <FaReact />
            </div>
            <div className="tech-icon-wrapper t-2" title="Node.js">
              <FaNodeJs />
            </div>
            <div className="tech-icon-wrapper t-3" title="Databases">
              <FaDatabase />
            </div>
          </div>

          {/* Glowing Badges */}
          <motion.div 
            className="hero-stats-badge badge-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>7+</span>
            <p>Projects Built</p>
          </motion.div>

          <motion.div 
            className="hero-stats-badge badge-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span>8.8</span>
            <p>Current CGPA</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="scroll-indicator-container">
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="scroll-wheel" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;