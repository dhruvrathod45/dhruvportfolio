function Hero() {
  return (
    <section className="hero">

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="hero-left">

        <p className="hero-role">
          FULL STACK DEVELOPER
        </p>

        <h1>
          Engineering
          <br />
          Scalable
          <br />
          <span>Digital Experiences.</span>
        </h1>

        <p className="hero-text">

          I'm Dhruv Rathod, a B.Tech Computer
          Science Engineering (Artificial
          Intelligence & Machine Learning)
          student at Adani University.

          I specialize in building modern web
          applications, scalable backend
          systems and responsive user
          experiences using React.js,
          Node.js, Express.js, MongoDB
          and PostgreSQL.

          Currently seeking opportunities to
          contribute, learn and grow as a
          Software Engineer through real-world
          development experiences.

        </p>

        <div className="hero-buttons">

          <a href="#projects">
            Explore My Work
          </a>

          <a
            href="/resume.pdf"
            download
          >
            Download Resume
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <div className="hero-badge">
            <span>7+</span>
            <p>Projects Built</p>
          </div>

          <div className="hero-badge">
            <span>8.8</span>
            <p>Current CGPA</p>
          </div>

          <div className="hero-badge">
            <span>2024</span>
            <p>Development Journey Started</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;