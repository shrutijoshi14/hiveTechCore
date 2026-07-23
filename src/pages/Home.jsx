import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import customImg from '../assets/custom.png';
import officeImg from '../assets/office2.png';
import redesignImg from '../assets/Redesign.png';
import standardImg from '../assets/standard.png';
import BrandingSection from '../components/BrandingSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import SEO from '../components/SEO.jsx';
import '../styles/Home.css';

/* ------------------ HOME ------------------ */
export default function Home() {
  const featuredProjects = [
    {
      id: 'crm-cms',
      title: 'Hive CRM & CMS Platform',
      tech: 'React · Node.js · Automation',
      description: 'Unified customer relations and dynamic content management platform.',
      img: customImg,
    },
    {
      id: 'gpshele-dadhare',
      title: 'GPShele Dadhare Website',
      tech: 'React · Dynamic CMS Portal',
      description: 'Official digital portal engineered for GPShele Dadhare.',
      img: standardImg,
    },
    {
      id: 'code-insight-academy',
      title: 'Code Insight Academy',
      tech: 'React · LMS · Student Portal',
      description: 'Interactive ed-tech academy platform and course management system.',
      img: redesignImg,
    },
    {
      id: 'pib-insurance',
      title: 'PIB Insurance Portal',
      tech: 'React · Financial Quote Engine',
      description: 'Comprehensive insurance portal with instant quote calculation.',
      img: officeImg,
    },
  ];

  return (
    <main className="home">
      <SEO
        title="HiveTechCore | Building Websites. Powering Business Automation."
        description="HiveTechCore helps businesses establish a strong digital presence with modern websites, ERPs, CRMs, School Management Systems, and AI business automation."
      />
      {/* PREMIUM HERO */}
      <section className="hero-premium">
        <div className="hero-overlay"></div>
        <div className="hero-image-bg" style={{ backgroundImage: `url(${officeImg})` }}></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge" data-aos="fade-up" data-aos-delay="200">
              Building Websites. Powering Business Automation.
            </div>
            <h1 data-aos="fade-up" data-aos-delay="400">
              Technology Built <br />
              <span>To Work Smarter</span>
            </h1>
            <p className="hero-lead" data-aos="fade-up" data-aos-delay="600">
              We design and develop modern, high-performance websites and intelligent digital solutions—from ERPs & CRMs to AI-powered automation systems.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="800">
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
                Explore Projects →
              </Link>
            </div>
          </div>
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
      <div data-aos="fade-up">
        <BrandingSection />
      </div>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="services-premium" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="badge">Featured Deliveries</div>
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              Explore solutions built for businesses, educational academies, and enterprise platforms.
            </p>
          </div>

          <div className="services-grid">
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="glass-card service-card"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                whileHover={{ y: -8 }}
              >
                <div className="card-img-wrapper">
                  <img src={proj.img} alt={proj.title} />
                </div>
                <div className="card-body">
                  <h3>{proj.title}</h3>
                  <span className="tech-tag" style={{ color: 'var(--primary)', fontSize: '13px', display: 'block', marginBottom: '8px' }}>{proj.tech}</span>
                  <p>{proj.description}</p>
                  <Link to={`/work/${proj.id}`} className="btn-text">
                    View Demo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/work">
              <button className="btn-outline-gold">View All Portfolio Projects →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <ProcessSection />

      {/* WHY US / TRUST */}
      <section className="trust-premium">
        <div className="container grid-2">
          <div className="trust-content" data-aos="fade-right">
            <h2 className="section-title text-left">The HiveTechCore Advantage</h2>
            <p className="lead-text">
              We don't just build software—we build technology that helps businesses work smarter.
            </p>
            <ul className="advantages-list">
              <li data-aos="fade-right" data-aos-delay="200">
                <strong>Business Process Automation:</strong> Save time, eliminate manual repetition, and boost productivity.
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <strong>Secure & Scalable Architecture:</strong> Future-ready cloud infrastructure designed to grow with your organization.
              </li>
              <li data-aos="fade-right" data-aos-delay="600">
                <strong>End-to-End Solutions:</strong> From web design and CRM/ERP development to ongoing maintenance & support.
              </li>
            </ul>
            <div data-aos="fade-up" data-aos-delay="800">
              <Link to="/about">
                <button className="btn-gold">Discover Our Story</button>
              </Link>
            </div>
          </div>
          <div className="trust-visual" data-aos="zoom-in" data-aos-duration="1200">
            <div className="experience-badge glass-card" data-aos="fade-down" data-aos-delay="400">
              <span className="number">100%</span>
              <span className="label">Future-Ready Tech</span>
            </div>
            <img src={officeImg} alt="HiveTechCore Technology" className="rounded-img" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="premium-final-cta">
        <div className="container">
          <div className="cta-glass-box" data-aos="zoom-in">
            <h2 data-aos="fade-up" data-aos-delay="200">
              Ready to Simplify Your Business Operations?
            </h2>
            <p data-aos="fade-up" data-aos-delay="400">
              Let's create secure, high-performance websites and automated systems for your growth.
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
              <Link to="/contact">
                <button className="btn-gold large">Get a Free Consultation</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
