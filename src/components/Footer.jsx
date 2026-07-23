import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-removebg-preview.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container footer-container">
        {/* BRAND */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="footer-logo-header">
            <img src={Logo} alt="HiveTechCore Logo" className="footer-logo" />
            <h3>HiveTechCore</h3>
          </div>
          <p>Building Websites. Powering Business Automation.</p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h4>Contact</h4>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ hiveTechCore@gmail.com</p>

          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        © {new Date().getFullYear()} Hive Tech Core. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
