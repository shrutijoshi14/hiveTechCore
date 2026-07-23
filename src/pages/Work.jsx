import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import basicImg from '../assets/basic.png';
import customImg from '../assets/custom.png';
import ecommerceImg from '../assets/ecommerce.png';
import landingImg from '../assets/landing.png';
import officeImg from '../assets/office2.png';
import redesignImg from '../assets/Redesign.png';
import standardImg from '../assets/standard.png';
import SEO from '../components/SEO';
import '../styles/Work.css';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 'crm-cms',
      title: 'Hive CRM & CMS Platform',
      tech: 'React · Node.js · PostgreSQL · Automation',
      description:
        'All-in-one Customer Relationship and Content Management platform. Manages leads, client communication, dynamic page publishing, and business analytics in a unified dashboard.',
      category: 'Business Software',
      img: customImg,
      featured: true,
    },
    {
      id: 'gpshele-dadhare',
      title: 'GPShele Dadhare Website',
      tech: 'React · Dynamic CMS · High Performance Portal',
      description:
        'Official digital portal designed for GPShele Dadhare featuring an elegant design system, fast page load speeds, mobile responsiveness, and easy institutional content updates.',
      category: 'Websites',
      img: standardImg,
      featured: true,
    },
    {
      id: 'code-insight-academy',
      title: 'Code Insight Academy',
      tech: 'React · LMS · Student Portal · Streaming',
      description:
        'Modern ed-tech learning management platform with course catalogs, interactive lessons, student progress tracking, certification workflows, and live batch management.',
      category: 'EdTech & Portals',
      img: redesignImg,
      featured: true,
    },
    {
      id: 'pib-insurance',
      title: 'PIB Insurance Portal',
      tech: 'React · Financial APIs · Instant Quote Engine',
      description:
        'Secure insurance platform for policy comparison, instant premium estimation, automated claim filings, customer portals, and enterprise lead routing.',
      category: 'FinTech & Insurance',
      img: officeImg,
      featured: true,
    },
  ];

  const categories = ['All', 'Business Software', 'Websites', 'EdTech & Portals', 'FinTech & Insurance'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return p.featured;
    return p.category === activeCategory;
  });

  return (
    <main className="work-page">
      <SEO
        title="Our Projects & Portfolio | HiveTechCore"
        description="Explore projects built by HiveTechCore including CRM & CMS platforms, GPShele Dadhare website, Code Insight Academy portal, PIB Insurance platform, and custom web applications."
      />

      {/* HERO */}
      <section className="work-hero">
        <div className="container">
          <div data-aos="fade-up">
            <div className="badge">Engineering Excellence</div>
            <h1>
              Our Featured <span>Projects & Solutions</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Explore our portfolio of high-impact web applications, enterprise CRM & CMS systems, educational platforms, and custom business automation portals.
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="work-filters" data-aos="fade-up" data-aos-delay="300">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="work-grid">
        <div className="container">
          <motion.div layout className="grid-stack">
            <AnimatePresence>
              {filteredProjects.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="work-card glass-card"
                  whileHover={{ y: -8 }}
                >
                  <div className="work-img-wrapper">
                    <img src={item.img} alt={item.title} />
                    <div className="category-badge">{item.category}</div>
                    {item.featured && <div className="featured-ribbon">Featured</div>}
                  </div>
                  <div className="work-card-content">
                    <h3>{item.title}</h3>
                    <span className="tech-stack-label">{item.tech}</span>
                    <p className="work-desc">{item.description}</p>
                    <div className="work-card-footer">
                      <Link to={`/work/${item.id}`}>
                        <button className="btn-text">Explore Project Details →</button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
