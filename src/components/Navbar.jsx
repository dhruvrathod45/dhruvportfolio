import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>DR</span>
      </div>

      <ul>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#achievements">Achievements</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="nav-right">

        <a
          href="https://github.com/dhruvrathod45"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dhruvrathod45/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;