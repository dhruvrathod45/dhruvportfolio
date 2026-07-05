import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  // Handle scroll class addition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active Section Highlight
  useEffect(() => {
    const sections = ["about", "skills", "projects", "education", "achievements", "contact", "experience"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If experience is active, highlight About or Skills, or just keep activeSection
          if (entry.target.id === "experience") {
            setActiveSection("about");
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when section is in the middle of viewport
      threshold: 0
    };

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <a href="#" className="logo">
          DR
        </a>

        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div 
                    className="nav-active-dot"
                    layoutId="activeDot"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "var(--color-accent)"
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a
            href="https://github.com/dhruvrathod45"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dhruvrathod45/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
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

        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map((item, idx) => (
              <motion.a 
                key={item.label}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
              >
                {item.label}
              </motion.a>
            ))}

            <div className="mobile-nav-socials">
              <a
                href="https://github.com/dhruvrathod45"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvrathod45/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
              onClick={() => setMobileMenuOpen(false)}
              style={{ marginTop: "20px" }}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;