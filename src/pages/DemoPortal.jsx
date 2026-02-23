import { Link, useParams } from 'react-router-dom';
import LandingTemplate from '../components/LandingTemplate';

const demoConfigs = {
  corporate: {
    theme: 'corporate',
    hero: {
      title: 'Global Enterprise Solutions',
      subtitle: 'Engineering the future of cross-border commerce with secure cloud architectures.',
      ctaText: 'View Case Studies',
    },
    services: [
      {
        title: 'Cloud Infrastructure',
        description: 'Fault-tolerant systems designed for 99.99% uptime.',
      },
      {
        title: 'Data Analytics',
        description: 'Turn raw data into actionable business intelligence.',
      },
      {
        title: 'API Ecosystems',
        description: 'Connect your internal tools with seamless integrations.',
      },
    ],
    cta: { title: 'Modernize Your Infrastructure', btnText: 'Schedule Audit' },
  },
  ecommerce: {
    theme: 'ecommerce',
    hero: {
      title: 'Artisan Timepieces',
      subtitle: 'Exquisite craftsmanship meets modern e-commerce engineering.',
      ctaText: 'Shop Collection',
    },
    services: [
      {
        title: 'Safe Checkout',
        description: 'SSL encrypted and PCI-DSS compliant payment processing.',
      },
      {
        title: 'Real-time Tracking',
        description: 'Monitor your shipment from atelier to doorstep.',
      },
      {
        title: 'Curated Selection',
        description: 'Only the finest materials for a life well-lived.',
      },
    ],
    cta: { title: 'Elevate Your Style', btnText: 'Join the Club' },
  },
  restaurant: {
    theme: 'restaurant',
    hero: {
      title: 'Sage & Salt Bistro',
      subtitle: 'Traditional flavors reimagined for the modern palate.',
      ctaText: 'Book a Table',
    },
    services: [
      {
        title: 'Seasonal Menu',
        description: 'Ingredients sourced daily from local organic farms.',
      },
      { title: 'Wine Cellar', description: 'An award-winning collection of rare vintages.' },
      {
        title: 'Private Events',
        description: 'Intimate dining spaces for your most precious moments.',
      },
    ],
    cta: { title: 'Experience Culinary Art', btnText: 'View Menu' },
  },
  'local-business': {
    theme: 'corporate',
    hero: {
      title: 'Peak Physique Gym',
      subtitle: 'The premier destination for science-backed physical transformation.',
      ctaText: 'Get 3 Days Free',
    },
    services: [
      {
        title: 'Expert Coaching',
        description: 'Certified professionals dedicated to your safety and progress.',
      },
      { title: 'Modern Equipment', description: 'State-of-the-art weights and cardio technology.' },
      { title: 'Recovery Spa', description: 'Cryotherapy and massage for optimal muscle health.' },
    ],
    cta: { title: 'Start Your Transformation', btnText: 'Join Now' },
  },
  'personal-brand': {
    theme: 'ecommerce',
    hero: {
      title: 'Alex Creative',
      subtitle: 'Freelance Design & Development for high-impact startups.',
      ctaText: 'Hire Me',
    },
    services: [
      {
        title: 'Product Design',
        description: 'Users-first interfaces that drive engagement and retention.',
      },
      {
        title: 'Web Development',
        description: 'Pixel-perfect implementations of your brand vision.',
      },
      {
        title: 'Growth Strategy',
        description: 'Consulting on how to scale your startup effectively.',
      },
    ],
    cta: { title: 'Collaboration Starts Here', btnText: 'Send Message' },
  },
};

const DemoPortal = () => {
  const { id } = useParams();
  const config = demoConfigs[id];

  if (!config) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Demo Project Not Found</h2>
        <Link to="/work" className="btn-gold">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="demo-viewer">
      <div
        className="demo-bar container"
        style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.8)',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '0 0 10px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span>
          Demo: <strong>{config.hero.title}</strong>
        </span>
        <Link
          to="/work"
          style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}
        >
          ← Back to Portfolio
        </Link>
      </div>
      <LandingTemplate config={config} />
    </div>
  );
};

export default DemoPortal;
