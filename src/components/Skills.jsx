function Skills() {

  const frontend = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Axios"
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Socket.IO",
    "MVC Architecture"
  ];

  const database = [
    "MongoDB",
    "PostgreSQL",
    "MySQL"
  ];

  const tools = [
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Render",
    "VS Code"
  ];

  return (

    <section
      id="skills"
      className="skills-section"
    >

      <p className="section-tag">
        SKILLS
      </p>

      <h2 className="skills-title">
        Technologies I Work With
      </h2>

      <div className="skills-container">

        <div className="skill-group">

          <h3>
            Frontend Development
          </h3>

          <div className="skill-tags">

            {frontend.map((skill) => (

              <span key={skill}>
                {skill}
              </span>

            ))}

          </div>

        </div>

        <div className="skill-group">

          <h3>
            Backend Development
          </h3>

          <div className="skill-tags">

            {backend.map((skill) => (

              <span key={skill}>
                {skill}
              </span>

            ))}

          </div>

        </div>

        <div className="skill-group">

          <h3>
            Databases
          </h3>

          <div className="skill-tags">

            {database.map((skill) => (

              <span key={skill}>
                {skill}
              </span>

            ))}

          </div>

        </div>

        <div className="skill-group">

          <h3>
            Tools & Platforms
          </h3>

          <div className="skill-tags">

            {tools.map((skill) => (

              <span key={skill}>
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Skills;