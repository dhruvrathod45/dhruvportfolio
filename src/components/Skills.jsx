import { motion } from "framer-motion";

function Skills() {
  const frontend = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Axios", level: 85 }
  ];

  const backend = [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 90 },
    { name: "REST APIs", level: 92 },
    { name: "JWT Authentication", level: 85 },
    { name: "Socket.IO", level: 82 },
    { name: "MVC Architecture", level: 88 }
  ];

  const database = [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "MySQL", level: 80 }
  ];

  const tools = [
    { name: "Git", level: 88 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Vercel", level: 85 },
    { name: "Render", level: 82 },
    { name: "VS Code", level: 92 }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.p>
      
      <motion.h2 
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: "50px" }}
      >
        Technologies I Work With
      </motion.h2>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Frontend Group */}
        <motion.div 
          className="skill-group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            borderColor: "rgba(212, 175, 55, 0.2)",
            boxShadow: "0 12px 35px rgba(212, 175, 55, 0.05)"
          }}
        >
          <h3>Frontend Development</h3>
          <div className="skill-tags">
            {frontend.map((skill) => (
              <div key={skill.name} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div 
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backend Group */}
        <motion.div 
          className="skill-group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            borderColor: "rgba(139, 92, 246, 0.25)",
            boxShadow: "0 12px 35px rgba(139, 92, 246, 0.05)"
          }}
        >
          <h3>Backend Development</h3>
          <div className="skill-tags">
            {backend.map((skill) => (
              <div key={skill.name} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div 
                    className="skill-bar-fill"
                    style={{ background: "linear-gradient(to right, var(--color-purple), var(--color-blue))" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Databases Group */}
        <motion.div 
          className="skill-group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            borderColor: "rgba(59, 130, 246, 0.25)",
            boxShadow: "0 12px 35px rgba(59, 130, 246, 0.05)"
          }}
        >
          <h3>Databases</h3>
          <div className="skill-tags">
            {database.map((skill) => (
              <div key={skill.name} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div 
                    className="skill-bar-fill"
                    style={{ background: "linear-gradient(to right, var(--color-blue), var(--color-accent))" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools Group */}
        <motion.div 
          className="skill-group"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            borderColor: "rgba(212, 175, 55, 0.2)",
            boxShadow: "0 12px 35px rgba(212, 175, 55, 0.05)"
          }}
        >
          <h3>Tools & Platforms</h3>
          <div className="skill-tags">
            {tools.map((skill) => (
              <div key={skill.name} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div 
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;