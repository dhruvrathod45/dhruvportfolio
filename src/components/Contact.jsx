import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <p className="section-tag">
        CONTACT
      </p>

      <h2 className="contact-title">
        Let's Build Something Great
      </h2>

      <p className="contact-subtitle">

        Currently seeking internship
        opportunities in Full Stack
        Development, Backend Engineering
        and Software Development roles.

      </p>

      <div className="contact-grid">

        <a
          href="mailto:dhruvrathod.cse24@adani.uni.ac"
          className="contact-card"
        >

          <FaEnvelope />

          <h3>Email</h3>

          <p>
            dhruvrathod.cse24@adani.uni.ac
          </p>

        </a>

        <a
          href="https://github.com/dhruvrathod45"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <FaGithub />

          <h3>GitHub</h3>

          <p>
            github.com/dhruvrathod45
          </p>

        </a>

        <a
          href="https://www.linkedin.com/in/dhruvrathod45/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <FaLinkedin />

          <h3>LinkedIn</h3>

          <p>
            Connect Professionally
          </p>

        </a>

        <a
          href="/resume.pdf"
          download
          className="contact-card"
        >

          <FaFileAlt />

          <h3>Resume</h3>

          <p>
            Download Resume
          </p>

        </a>

      </div>

      <div className="availability">

        <h3>
          Open To Opportunities
        </h3>

        <p>

          Backend Development

          •

          Full Stack Development

          •

          Software Engineering Internships

        </p>

      </div>

    </section>

  );
}

export default Contact;