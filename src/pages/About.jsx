import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import officeImg2 from '../assets/office2.png';
import ProcessSection from '../components/ProcessSection';
import SEO from '../components/SEO';
import '../styles/About.css';

export default function About() {
  const whatWeDoList = [
    { title: 'Professional Website Development', desc: 'Modern, high-performance, and conversion-focused websites that elevate online presence.', icon: '🌐' },
    { title: 'Custom Web Application Development', desc: 'Scalable, tailor-made web platforms built for speed, security, and unique business workflows.', icon: '⚡' },
    { title: 'CRM Development', desc: 'Customer Relationship Management systems designed to track leads, manage clients, and boost sales.', icon: '📈' },
    { title: 'ERP Development', desc: 'Comprehensive Enterprise Resource Planning solutions to streamline resources, inventory, and operations.', icon: '⚙️' },
    { title: 'School & College Management Systems', desc: 'Digital portals for student administration, grade tracking, attendance, fees, and staff workflows.', icon: '🎓' },
    { title: 'Business Process Automation', desc: 'Eliminate repetitive manual tasks through smart, automated digital workflows.', icon: '🤖' },
    { title: 'API Integration', desc: 'Seamless connection between payment gateways, third-party software, and internal tools.', icon: '🔗' },
    { title: 'Cloud-Based Software Solutions', desc: 'Secure cloud deployments providing high availability, data backup, and global accessibility.', icon: '☁️' },
    { title: 'Ongoing Maintenance & Technical Support', desc: 'Proactive server management, updates, security audits, and continuous optimization.', icon: '🛠️' },
  ];

  return (
    <main className="about-page-premium">
      <SEO
        title="About HiveTechCore | Building Websites & Powering Business Automation"
        description="Learn about HiveTechCore. We design modern websites and build custom ERP, CRM, School Management Systems, and AI-powered business automation tools."
      />

      {/* HERO SECTION */}
      <section className="about-hero-minimal">
        <div className="container">
          <div data-aos="fade-up">
            <div className="badge" data-aos="fade-up" data-aos-delay="100">
              Building Websites. Powering Business Automation.
            </div>
            <h1>
              About <span>HiveTechCore</span>
            </h1>
            <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">
              At <strong>HiveTechCore</strong>, we help businesses establish a strong digital presence and simplify the way they work. We design and develop modern, high-performance websites that not only look professional but also help businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW & BEYOND WEBSITES */}
      <section className="philosophy-section">
        <div className="container grid-2">
          <div className="philosophy-visual" data-aos="zoom-in">
            <img src={officeImg2} alt="HiveTechCore Innovation Hub" className="rounded-img" />
            <div className="innovation-overlay glass-card" data-aos="fade-up" data-aos-delay="400">
              <h4>Future-Ready Tech</h4>
              <p>Websites • ERPs • CRMs • AI Automation</p>
            </div>
          </div>
          <div className="philosophy-content" data-aos="fade-left">
            <div className="badge">Beyond Web Development</div>
            <h2>Intelligent Solutions for Modern Growth</h2>
            <p className="lead-text">
              Our vision goes beyond traditional website development. We build technology that automates business operations through intelligent digital solutions such as <strong>ERP Systems, CRM Software, School & College Management Systems, Business Portals, Custom Web Applications, and AI-powered automation tools</strong>.
            </p>
            <p>
              We believe technology should save time, reduce manual work, and help organizations focus on growth instead of repetitive tasks.
            </p>
            <div className="target-audience-box glass-card">
              <p>
                Whether you're a <strong>startup, educational institution, or an established business</strong>, HiveTechCore is committed to delivering secure, scalable, and future-ready solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Driven by Purpose</h2>
            <p className="section-subtitle">
              Empowering organizations through scalable software and automated workflows.
            </p>
          </div>

          <div className="grid-2 mission-vision-grid">
            <motion.div
              className="mv-card glass-card"
              data-aos="fade-right"
              whileHover={{ y: -5 }}
            >
              <div className="mv-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative digital solutions that simplify operations, improve efficiency, and accelerate growth through technology.
              </p>
            </motion.div>

            <motion.div
              className="mv-card glass-card"
              data-aos="fade-left"
              whileHover={{ y: -5 }}
            >
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become one of the most trusted technology brands in business automation, where organizations think of <strong>HiveTechCore</strong> whenever they need websites, ERP systems, CRM software, AI automation, or custom business solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <div className="badge">Our Expertise</div>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Comprehensive digital services engineered to accelerate business transformation.
            </p>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoList.map((item, idx) => (
              <motion.div
                key={idx}
                className="wwd-card glass-card"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                whileHover={{ y: -6, borderColor: 'var(--primary-glow)' }}
              >
                <div className="wwd-icon-badge">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <ProcessSection />

      {/* CLOSING STATEMENT & CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-glass-box glass-card" data-aos="zoom-in">
            <h2>At HiveTechCore, we don't just build software—we build technology that helps businesses work smarter.</h2>
            <p>Ready to simplify operations and accelerate your growth?</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="btn-gold large">Get Started Today</button>
              </Link>
              <Link to="/work" className="btn-text">
                Explore Our Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
