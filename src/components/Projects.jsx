import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sub-component to manage interactive 3D mouse tilt per card
function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // Motion values to track normalized mouse coordinates [0, 1]
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse positions to rotational angles
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 150, damping: 22 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), { stiffness: 150, damping: 22 });

  // Map mouse position to shine glare offset
  const shineX = useTransform(x, [0, 1], ["0%", "100%"]);
  const shineY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const badgeContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const badgeItem = {
    hidden: { opacity: 0, y: 10, scale: 0.85 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 18 } 
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glare Shine Overlay */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 4
        }}
      />

      {project.featured && (
        <span className="project-featured-ribbon">Flagship</span>
      )}

      {/* Large Mockup Dashboard visual */}
      <div className="project-image-container">
        <div className="project-mock-dashboard">
          <div className="dashboard-topbar">
            <div className="dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="dashboard-address">{project.address}</div>
            <div style={{ width: "25px" }} />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-graphic">
              <div className="graphic-line" />
              <div className="graphic-nodes">
                <span className="graphic-node" style={{ height: "20px" }}></span>
                <span className="graphic-node active" style={{ height: "42px" }}></span>
                <span className="graphic-node" style={{ height: "30px" }}></span>
                <span className="graphic-node" style={{ height: "18px" }}></span>
                <span className="graphic-node active" style={{ height: "38px" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        
        {/* Staggered Technology Badge entrance */}
        <motion.div 
          className="project-tech"
          variants={badgeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.tech.map((t, tIdx) => (
            <motion.span 
              key={tIdx} 
              variants={badgeItem}
              whileHover={{ scale: 1.08, color: "#fff", borderColor: "var(--color-accent)" }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link-btn"
          >
            <FaGithub /> GitHub
          </a>
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
              style={{ color: "var(--color-accent)" }}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
        className="projects-title"
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

        <div className="projects-grid">
          {frontendProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
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

        <div className="projects-grid">
          {backendProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;