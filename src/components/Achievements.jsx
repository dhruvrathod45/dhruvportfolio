import { motion } from "framer-motion";

function Achievements() {
  const highlights = [
    { value: "7+", label: "Real-World Projects Built" },
    { value: "3+", label: "Applications Deployed" },
    { value: "8.8", label: "Current CGPA" },
    { value: "2024", label: "Started Software Development" }
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
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="achievements" className="achievement-section">
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ACHIEVEMENTS
      </motion.p>
      
      <motion.h2 
        className="achievement-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: "50px" }}
      >
        Developer Highlights
      </motion.h2>

      <motion.div 
        className="achievement-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {highlights.map((hl, idx) => (
          <motion.div 
            key={idx} 
            className="achievement-card"
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.25)" }}
          >
            <h3>{hl.value}</h3>
            <p>{hl.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="achievement-summary"
        initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>
          Built frontend applications, backend APIs, real-time communication 
          systems and full-stack projects using React.js, Node.js, Express.js, 
          MongoDB and PostgreSQL. 
          <br /><br />
          Successfully deployed projects on Vercel and Render while continuously 
          improving software engineering, problem-solving and development skills.
        </p>
      </motion.div>
    </section>
  );
}

export default Achievements;