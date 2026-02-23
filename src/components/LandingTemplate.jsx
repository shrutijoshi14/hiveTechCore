import { motion } from 'framer-motion';
import './LandingTemplate.css';

const LandingTemplate = ({ config }) => {
  const { theme, hero, services, cta } = config;

  return (
    <div className={`landing-template theme-${theme}`}>
      {/* HERO SECTION */}
      <section className="template-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            {hero.title}
          </motion.h1>
          <p>{hero.subtitle}</p>
          <button className="btn-primary">{hero.ctaText}</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="template-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Specialties</h2>
          </div>
          <div className="template-grid">
            {services.map((service, i) => (
              <div key={i} className="template-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="template-cta">
        <div className="container">
          <h2>{cta.title}</h2>
          <button className="btn-primary">{cta.btnText}</button>
        </div>
      </section>
    </div>
  );
};

export default LandingTemplate;
