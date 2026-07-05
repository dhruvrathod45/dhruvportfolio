import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Counter Helper Component
function AnimatedCounter({ targetValue, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(targetValue);
    if (isNaN(end)) {
      const t = setTimeout(() => {
        setCount(targetValue);
      }, 0);
      return () => clearTimeout(t);
    }

    const isFloat = targetValue.toString().includes(".");
    const totalSteps = Math.round((duration * 1000) / 30);
    const increment = end / totalSteps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      start += increment;
      if (stepCount >= totalSteps) {
        clearInterval(timer);
        setCount(targetValue);
      } else {
        setCount(isFloat ? start.toFixed(1) : Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, targetValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
  const stats = [
    { target: "7", suffix: "+", label: "Projects Built" },
    { target: "3", suffix: "+", label: "Deployed Applications" },
    { target: "8.8", suffix: "", label: "Current CGPA" },
    { target: "2024", suffix: "", label: "Started Development" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-tag">ABOUT ME</p>
        <h2 className="section-title">
          Full Stack Developer & <span>Backend Enthusiast</span>
        </h2>
        <p className="section-text">
          I'm Dhruv Rathod, a B.Tech Computer Science (Artificial Intelligence) 
          student at Adani University with a strong passion for software 
          engineering, full stack development and backend architecture.
          <br /><br />
          I specialize in building responsive web applications, scalable REST APIs 
          and modern database-driven systems using React.js, Node.js, Express.js, 
          MongoDB and PostgreSQL.
          <br /><br />
          Through personal and academic projects, I have developed real-world 
          applications including e-commerce platforms, developer tools, weather 
          dashboards, real-time communication systems and backend API services 
          while deploying solutions on platforms such as Vercel and Render.
          <br /><br />
          I continuously focus on improving my problem-solving abilities, software 
          design skills and development practices to prepare for impactful software 
          engineering opportunities.
        </p>
      </motion.div>

      {/* Grid of stats displaying counters */}
      <motion.div 
        className="stats"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="stat-card"
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              borderColor: "rgba(212, 175, 55, 0.35)",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)"
            }}
          >
            <h3>
              <AnimatedCounter 
                targetValue={stat.target} 
                suffix={stat.suffix}
              />
            </h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;