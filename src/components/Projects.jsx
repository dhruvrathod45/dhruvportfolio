import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const frontendProjects = [
    {
      title: "NovaCart",
      description:
        "Premium e-commerce platform inspired by modern fashion brands. Features category filtering, cart management, responsive layouts, API-driven product rendering and Context API state management.",
      tech: ["React.js", "Tailwind CSS", "Context API", "Axios"],
      github: "https://github.com/dhruvrathod45/NovaCart-ecommerce-web",
      live: "https://nova-cart-ecommerce.vercel.app/",
      featured: true,
      address: "nova-cart-ecommerce.vercel.app"
    },
    {
      title: "GitNova Profile Explorer",
      description:
        "GitHub analytics dashboard that visualizes repositories, profile information and user statistics using real-time GitHub API integration.",
      tech: ["React.js", "GitHub API", "JavaScript"],
      github: "https://github.com/dhruvrathod45/GitNova-Profile-Explorer",
      address: "github.com/dhruvrathod45/GitNova"
    },
    {
      title: "Climatrix",
      description:
        "Modern weather dashboard delivering real-time weather insights, forecasts and responsive UI experiences through weather API integration.",
      tech: ["React.js", "Weather API", "CSS"],
      github: "https://github.com/dhruvrathod45/Climatrix",
      address: "climatrix-weather.vercel.app"
    }
  ];

  const backendProjects = [
    {
      title: "NotifyX",
      description:
        "Real-time notification platform designed for instant event broadcasting using Socket.IO with scalable backend architecture and live notification delivery.",
      tech: ["Node.js", "Express.js", "Socket.IO", "MongoDB"],
      github: "https://github.com/dhruvrathod45/NotifyX",
      featured: true,
      address: "notifyx-service.render.com"
    },
    {
      title: "ChatFlow",
      description:
        "Full-stack real-time messaging application supporting instant communication, authentication, online presence and WebSocket-based architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],
      github: "https://github.com/dhruvrathod45/ChatFlow",
      address: "chatflow-app.render.com"
    },
    {
      title: "Task API",
      description:
        "RESTful task management backend implementing CRUD operations, authentication, protected routes and scalable MVC architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/dhruvrathod45/Task-Api",
      address: "taskmanager-api.local"
    },
    {
      title: "URL Shortener",
      description:
        "Backend URL shortening service enabling efficient redirect management, link generation and database-backed persistence.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/dhruvrathod45/Url-Shortner",
      address: "urlshort-api.local"
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

  const renderProjectCard = (project) => (
    <motion.div
      key={project.title}
      className="project-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      {project.featured && (
        <span className="project-featured-ribbon">Flagship</span>
      )}

      {/* Simulated premium dashboard browser view */}
      <div className="project-image-container">
        <div className="project-mock-dashboard">
          <div className="dashboard-topbar">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="dashboard-address">{project.address}</div>
            <div style={{ width: '25px' }} />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-graphic">
              <div className="graphic-line" />
              <div className="graphic-nodes">
                <span className="graphic-node" style={{ height: '15px' }}></span>
                <span className="graphic-node active" style={{ height: '32px' }}></span>
                <span className="graphic-node" style={{ height: '22px' }}></span>
                <span className="graphic-node" style={{ height: '12px' }}></span>
                <span className="graphic-node active" style={{ height: '28px' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((t, tIdx) => (
            <span key={tIdx}>{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--color-accent)' }}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="projects-section">
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.p>
      
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Featured <span>Work</span>
      </motion.h2>

      {/* FRONTEND PROJECTS */}
      <div className="project-category">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Frontend Development
        </motion.h3>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {frontendProjects.map((p, idx) => renderProjectCard(p, idx))}
        </motion.div>
      </div>

      {/* BACKEND PROJECTS */}
      <div className="project-category">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Backend Development
        </motion.h3>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {backendProjects.map((p, idx) => renderProjectCard(p, idx))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;