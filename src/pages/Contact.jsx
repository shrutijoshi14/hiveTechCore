import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Contact.css';

const SuccessUI = () => (
  <motion.div
    className="success-box glass-card"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <div className="success-icon">✓</div>
    <h2>Transmission Received</h2>
    <p>
      Our strategy team will contact you within <strong>24 hours</strong> to discuss your vision.
    </p>
  </motion.div>
);

export default function Contact() {
  const location = useLocation();
  const data = location.state;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="contact-page-wrapper">
      <section className="contact-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Let's Build Something <span>Extraordinary</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Whether you're starting from scratch or scaling to new heights, we're here to engineer
            your success.
          </motion.p>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container grid-2">
          {/* COLUMN 1: COMPANY DETAILS */}
          <motion.div
            className="contact-info-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="info-block">
              <h3>Direct Contact</h3>
              <p className="info-item">
                <strong>Email:</strong> hello@hivetechcore.com
              </p>
              <p className="info-item">
                <strong>Phone:</strong> +91 [Your Number]
              </p>
            </div>

            <div className="info-block">
              <h3>Headquarters</h3>
              <p className="info-item">
                Hive Tech Core Solutions
                <br />
                Digital Innovation Hub
                <br />
                Remote First • Worldwide
              </p>
            </div>

            <div className="info-block">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="#" className="social-tag">
                  LinkedIn
                </a>
                <a href="#" className="social-tag">
                  Twitter
                </a>
                <a href="#" className="social-tag">
                  GitHub
                </a>
              </div>
            </div>

            {data && (
              <div className="selected-service-badge glass-card">
                <h4>Inquiry Focus:</h4>
                <p>{data.service}</p>
                {data.basePrice && (
                  <span className="price-est">Est. Starting: ₹{data.basePrice}</span>
                )}
              </div>
            )}
          </motion.div>

          {/* COLUMN 2: FORM */}
          <motion.div
            className="contact-form-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  className="premium-form glass-card"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Project Overview</label>
                    <textarea placeholder="Tell us about your goals..." rows="5" required />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-gold"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <SuccessUI key="success" />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
