import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/WorkPreview.css";

export default function WorkPreview() {
  return (
    <section className="work-preview">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.h2>

      <div className="work-preview-grid">
        <div className="preview-card">
          <h3>Business Website</h3>
          <p>Modern responsive website for startups.</p>
          <span>React · CSS</span>
        </div>

        <div className="preview-card">
          <h3>E-Commerce Demo</h3>
          <p>Product flow & scalable UI demo.</p>
          <span>React · API</span>
        </div>
      </div>

      <Link to="/work">
        <button className="cta-btn glow">View All Work</button>
      </Link>
    </section>
  );
}
