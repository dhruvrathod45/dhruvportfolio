import { motion } from "framer-motion";

function ProjectCategories() {
  const categories = [
    {
      tag: "FRONTEND",
      title: "Frontend Development",
      description: "Building responsive, modern and user-focused web applications with clean UI, API integrations and optimized user experiences.",
      items: [
        "NovaCart – E-Commerce Platform",
        "GitNova – GitHub Analytics Dashboard",
        "Climatrix – Weather Dashboard",
        "Personal Portfolio Website"
      ]
    },
    {
      tag: "BACKEND",
      title: "Backend Development",
      description: "Designing scalable REST APIs, authentication systems, database architectures and real-time communication solutions.",
      items: [
        "NotifyX – Notification Platform",
        "ChatFlow – Real-Time Chat Application",
        "Task API – Task Management Backend",
        "URL Shortener Service"
      ]
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="categories">
      <motion.div 
        className="categories-grid-wrapper"
        style={{ display: "contents" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            className="category-box"
            variants={cardVariants}
            whileHover={{
              borderColor: "rgba(212, 175, 55, 0.2)",
              y: -5
            }}
          >
            <span className="category-tag">{cat.tag}</span>
            <h2>{cat.title}</h2>
            <p className="category-description">{cat.description}</p>
            <ul>
              {cat.items.map((item, itemIdx) => (
                <motion.li 
                  key={itemIdx}
                  whileHover={{ x: 6, color: "var(--color-accent)" }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectCategories;