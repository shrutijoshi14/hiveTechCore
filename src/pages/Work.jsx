import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import basicImg from '../assets/basic.png';
import ecommerceImg from '../assets/ecommerce.png';
import landingImg from '../assets/landing.png';
import officeImg from '../assets/office2.png';
import standardImg from '../assets/standard.png';
import '../styles/Work.css';

export default function Work() {
  const projects = [
    {
      id: 'corporate',
      title: 'OmniConnect Enterprise',
      tech: 'React · Node.js · Cloud Architecture',
      description:
        'A high-performance corporate platform with scalable backend and secure data pipelines.',
      category: 'Corporate',
      img: officeImg,
    },
    {
      id: 'ecommerce',
      title: 'LuxeWatches Storefront',
      tech: 'React · Redux · Payment API',
      description:
        'A premium e-commerce experience featuring real-time inventory and seamless checkout.',
      category: 'E-Commerce',
      img: ecommerceImg,
    },
    {
      id: 'restaurant',
      title: 'Sage & Salt Bistro',
      tech: 'React · Framer Motion · Booking API',
      description: 'An interactive culinary experience with dynamic menus and reservation systems.',
      category: 'Restaurant',
      img: landingImg,
    },
    {
      id: 'local-business',
      title: 'Peak Physique Gym',
      tech: 'React · Local SEO · Schedules',
      description:
        'A conversion-focused landing page for local fitness centers with class booking blocks.',
      category: 'Local Business',
      img: standardImg,
    },
    {
      id: 'personal-brand',
      title: 'Alex Creative Portfolio',
      tech: 'React · GSAP · Blog CMS',
      description:
        'A high-end personal brand layout with integrated blogging and project showcases.',
      category: 'Personal Brand',
      img: basicImg,
    },
  ];

  return (
    <main className="work-page">
      {/* HERO */}
      <section className="work-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            What We Build
          </motion.h1>

          <p>
            A collection of demo projects and digital solutions built with performance and
            scalability.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="work-grid">
        <div className="container">
          <div className="grid-stack">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                className="work-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="work-img-wrapper">
                  <img src={item.img} alt={item.title} />
                  <div className="category-badge">{item.category}</div>
                </div>
                <div className="work-card-content">
                  <h3>{item.title}</h3>
                  <span className="tech-stack-label">{item.tech}</span>
                  <p className="work-desc">{item.description}</p>
                  <Link to={`/work/${item.id}`}>
                    <button className="btn-text">View Live Demo →</button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
