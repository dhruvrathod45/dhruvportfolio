import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "dhruvrathod.cse24@adani.uni.ac",
      href: "mailto:dhruvrathod.cse24@adani.uni.ac"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/dhruvrathod45",
      href: "https://github.com/dhruvrathod45",
      target: "_blank"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect Professionally",
      href: "https://www.linkedin.com/in/dhruvrathod45/",
      target: "_blank"
    },
    {
      icon: <FaFileAlt />,
      title: "Resume",
      value: "Download Resume",
      href: "/resume.pdf",
      download: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Automatically hide success notification after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.p 
        className="section-tag"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.p>
      
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ marginBottom: "50px" }}
      >
        Let's Build <span>Something Great</span>
      </motion.h2>

      <div className="contact-layout">
        {/* Left Column: Direct Links */}
        <motion.div 
          className="contact-info-block"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="contact-subtitle" style={{ margin: 0, marginBottom: "15px" }}>
            Currently seeking internship opportunities in Full Stack Development, 
            Backend Engineering and Software Development roles.
          </p>

          {contactCards.map((card, idx) => (
            <a 
              key={idx}
              href={card.href}
              target={card.target}
              rel={card.target ? "noreferrer" : undefined}
              download={card.download}
              className="contact-card"
            >
              {card.icon}
              <div>
                <h3>{card.title}</h3>
                <p>{card.value}</p>
              </div>
            </a>
          ))}

          <div className="availability">
            <h3>Open To Opportunities</h3>
            <p>
              Backend Development • Full Stack Development • Software Engineering Internships
            </p>
          </div>
        </motion.div>

        {/* Right Column: Premium Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card" style={{ padding: "45px" }}>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <label htmlFor="email" className="form-label">Your Email</label>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <textarea 
                  id="message"
                  name="message"
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <label htmlFor="message" className="form-label">Message Details</label>
              </div>

              <motion.button 
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending Connection..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success Notification Popup */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            className="form-success-popup"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <FaCheckCircle style={{ fontSize: "1.4rem" }} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;