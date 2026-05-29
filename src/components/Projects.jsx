function Projects() {

  const frontendProjects = [

    {
      title: "NovaCart",
      description:
        "Premium e-commerce platform inspired by modern fashion brands. Features category filtering, cart management, responsive layouts, API-driven product rendering and Context API state management.",
      tech:
        "React.js • Tailwind CSS • Context API • Axios",
      github:
        "https://github.com/dhruvrathod45/NovaCart-ecommerce-web",
      live:
        "https://nova-cart-ecommerce.vercel.app/"
    },

    {
      title: "GitNova Profile Explorer",
      description:
        "GitHub analytics dashboard that visualizes repositories, profile information and user statistics using real-time GitHub API integration.",
      tech:
        "React.js • GitHub API • JavaScript",
      github:
        "https://github.com/dhruvrathod45/GitNova-Profile-Explorer"
    },

    {
      title: "Climatrix",
      description:
        "Modern weather dashboard delivering real-time weather insights, forecasts and responsive UI experiences through weather API integration.",
      tech:
        "React.js • Weather API • CSS",
      github:
        "https://github.com/dhruvrathod45/Climatrix"
    }

  ];

  const backendProjects = [

    {
      title: "NotifyX",
      description:
        "Real-time notification platform designed for instant event broadcasting using Socket.IO with scalable backend architecture and live notification delivery.",
      tech:
        "Node.js • Express.js • Socket.IO • MongoDB",
      github:
        "https://github.com/dhruvrathod45/NotifyX"
    },

    {
      title: "ChatFlow",
      description:
        "Full-stack real-time messaging application supporting instant communication, authentication, online presence and WebSocket-based architecture.",
      tech:
        "Node.js • Express.js • MongoDB • JWT • Socket.IO",
      github:
        "https://github.com/dhruvrathod45/ChatFlow"
    },

    {
      title: "Task API",
      description:
        "RESTful task management backend implementing CRUD operations, authentication, protected routes and scalable MVC architecture.",
      tech:
        "Node.js • Express.js • MongoDB • JWT",
      github:
        "https://github.com/dhruvrathod45/Task-Api"
    },

    {
      title: "URL Shortener",
      description:
        "Backend URL shortening service enabling efficient redirect management, link generation and database-backed persistence.",
      tech:
        "Node.js • Express.js • MongoDB",
      github:
        "https://github.com/dhruvrathod45/Url-Shortner"
    }

  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <p className="section-tag">
        PORTFOLIO
      </p>

      <h2 className="projects-title">
        Featured Work
      </h2>

      {/* FRONTEND */}

      <div className="project-category">

        <h3>
          Frontend Development
        </h3>

        <div className="projects-grid">

          {frontendProjects.map((project) => (

            <div
              key={project.title}
              className="project-card"
            >

              <h4>{project.title}</h4>

              <p>
                {project.description}
              </p>

              <span>
                {project.tech}
              </span>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BACKEND */}

      <div className="project-category">

        <h3>
          Backend Development
        </h3>

        <div className="projects-grid">

          {backendProjects.map((project) => (

            <div
              key={project.title}
              className="project-card"
            >

              <h4>{project.title}</h4>

              <p>
                {project.description}
              </p>

              <span>
                {project.tech}
              </span>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;