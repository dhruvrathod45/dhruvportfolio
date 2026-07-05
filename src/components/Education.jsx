import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      year: "2024 – 2028",
      institution: "Adani University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
      detail: "Current CGPA: 8.8 / 10"
    },
    {
      year: "2024",
      institution: "CBSE Class XII",
      degree: "Higher Secondary Education",
      field: "Science Stream & Mathematics",
      detail: "Scored: 81%"
    },
    {
      year: "2022",
      institution: "CBSE Class X",
      degree: "Secondary Education",
      field: "General Curriculum",
      detail: "Scored: 89.6%"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="education" className="education-section">
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        EDUCATION
      </motion.p>
      
      <motion.h2 
        className="education-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Academic <span>Journey</span>
      </motion.h2>

      <motion.p 
        className="education-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Building a strong foundation in Computer Science, Artificial Intelligence 
        and Software Engineering while maintaining consistent academic performance.
      </motion.p>

      <div className="education-timeline-vertical">
        <motion.div 
          className="education-timeline-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card education-timeline-card"
              variants={cardVariants}
              whileHover={{ 
                x: 8,
                borderColor: "rgba(212, 175, 55, 0.2)"
              }}
            >
              <span className="year">{edu.year}</span>
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '8px' }}>{edu.field}</p>
              <p className="highlight">{edu.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;