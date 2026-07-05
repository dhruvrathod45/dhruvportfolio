import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      {/* Animated Divider */}
      <motion.div 
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          transformOrigin: "center",
          marginBottom: "40px"
        }}
      />

      <div className="footer-container">
        <motion.p 
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          © 2026 Dhruv Rathod. Designed & Engineered with refinement.
        </motion.p>

        {/* Back to top button */}
        <motion.button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}

export default Footer;