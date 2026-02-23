import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import customImg from '../assets/custom.png';
import landingImg from '../assets/landing.png';
import maintenanceImg from '../assets/maintenance.png';
import officeImg from '../assets/office2.png';
import redesignImg from '../assets/Redesign.png';
import BrandingSection from '../components/BrandingSection.jsx';
import SEO from '../components/SEO.jsx';
import '../styles/Home.css';

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/* ------------------ HOME ------------------ */
export default function Home() {
  return (
    <main className="home">
      <SEO
        title="Innovating the Digital Future"
        description="Hive Tech Core delivers premium web and software engineering solutions for startups and enterprises worldwide. We turn vision into scalable reality."
      />
      {/* PREMIUM HERO */}
      <section className="hero-premium">
        <div className="hero-overlay"></div>
        <div className="hero-image-bg" style={{ backgroundImage: `url(${officeImg})` }}></div>

        <div className="container hero-container">
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge">Next-Gen Web Solutions</div>
            <h1>
              Innovative Technology <br />
              <span>Built for Excellence</span>
            </h1>
            <p className="hero-lead">
              We engineer high-performance, secure, and sophisticated digital experiences that
              empower your business to dominate the digital landscape.
            </p>
            <div className="hero-actions">
              <Link to="/contact">
                <motion.button
                  className="btn-gold"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-glow)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link to="/work" className="btn-text">
                Explore Our Portfolio →
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="scroll-dot"
          />
        </div>
      </section>

      {/* BRANDING SNIPPET */}
      <BrandingSection />

      {/* PREMIUM SERVICES */}
      <section className="services-premium">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Operational Excellence</h2>
            <p className="section-subtitle">
              Comprehensive development solutions tailored to your unique business DNA.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Custom Architectures',
                desc: 'Scalable React-driven applications built with precision and future-proof code.',
                img: customImg,
              },
              {
                title: 'Lead-Gen Landing Pages',
                desc: 'High-conversion entries designed to turn visitors into loyal customers.',
                img: landingImg,
              },
              {
                title: 'UI/UX Transformation',
                desc: 'Breathe new life into legacy systems with world-class design standards.',
                img: redesignImg,
              },
              {
                title: 'Strategic Maintenance',
                desc: 'Continuous optimization and security monitoring for peak performance.',
                img: maintenanceImg,
              },
            ].map((service, idx) => (
              <motion.div key={idx} className="glass-card service-card" variants={fadeUp}>
                <div className="card-img-wrapper">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to={`/services`} className="btn-text">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY US / TRUST (Refined existing section) */}
      <section className="trust-premium">
        <div className="container grid-2">
          <motion.div
            className="trust-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title text-left">The Hive Tech Core Advantage</h2>
            <p className="lead-text">
              We don't just build websites; we construct digital ecosystems that drive results.
            </p>
            <ul className="advantages-list">
              <li>
                <strong>Strategic Engineering:</strong> Every line of code serves a business goal.
              </li>
              <li>
                <strong>Security First:</strong> Enterprise-grade protection for your data and
                users.
              </li>
              <li>
                <strong>Scalable Growth:</strong> Architecture that expands alongside your success.
              </li>
            </ul>
            <Link to="/about">
              <button className="btn-outline-gold">About Our Process</button>
            </Link>
          </motion.div>
          <motion.div
            className="trust-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="experience-badge glass-card">
              <span className="number">5+</span>
              <span className="label">Years of Innovation</span>
            </div>
            <img src={officeImg} alt="Hive Tech Core HQ" className="rounded-img" />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="premium-final-cta">
        <div className="container">
          <motion.div
            className="cta-glass-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Evolve Your Digital Presence?</h2>
            <p>Join the leaders who trust Hive Tech Core for their most ambitious projects.</p>
            <Link to="/contact">
              <button className="btn-gold large">Get Your Free Consultation</button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
