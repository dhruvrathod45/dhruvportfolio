import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function Experience() {
  const containerRef = useRef(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const experiences = [
    {
      company: "Ryogen",
      role: "Full Stack Developer Intern",
      period: "June 2026 – Present",
      side: "left",
      responsibilities: [
        "Developing scalable full-stack web applications.",
        "Building REST APIs using Node.js and Express.",
        "Creating responsive React interfaces.",
        "Working with PostgreSQL and MongoDB.",
        "API integrations.",
        "Git collaboration.",
        "Performance optimization."
      ],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "TypeScript", "Git"]
    },
    {
      company: "Bharat Space Education Research Centre (BSERC)",
      role: "Def Tech Space Intern",
      period: "June 2026 – Present",
      side: "right",
      responsibilities: [
        "Data analysis.",
        "Data visualization.",
        "Python scripting.",
        "Report automation.",
        "CSV processing.",
        "Research support."
      ],
      tech: ["Python", "Pandas", "NumPy", "Excel", "Data Analysis", "Visualization"]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        JOURNEY
      </motion.p>
      
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Work <span>Experience</span>
      </motion.h2>

      <div className="experience-timeline">
        {/* Scroll growing timeline line */}
        <motion.div 
          className="timeline-center-line" 
          style={{ scaleY }}
        />

        {experiences.map((exp, idx) => {
          const isLeft = exp.side === "left";
          
          return (
            <div 
              key={idx} 
              className={`timeline-item ${isLeft ? "left" : "right"}`}
            >
              {/* Pulsing Timeline Dot */}
              <motion.div 
                className="timeline-dot"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 8px rgba(212, 175, 55, 0.4)",
                    "0 0 20px rgba(212, 175, 55, 0.8)",
                    "0 0 8px rgba(212, 175, 55, 0.4)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Glassmorphic Experience Card */}
              <motion.div 
                className="glass-card timeline-card"
                initial={{ 
                  opacity: 0, 
                  x: isLeft ? -120 : 120 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.1 
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 12px 40px rgba(212, 175, 55, 0.08)",
                  borderColor: "rgba(212, 175, 55, 0.2)"
                }}
              >
                <div className="company-badge">{exp.company}</div>
                <span className="date">{exp.period}</span>
                <h3>{exp.role}</h3>
                
                <ul>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                <div className="timeline-tech-tags">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx}>{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
