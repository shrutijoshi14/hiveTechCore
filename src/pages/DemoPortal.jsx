import { Link, useParams } from 'react-router-dom';
import LandingTemplate from '../components/LandingTemplate';

const demoConfigs = {
  'crm-cms': {
    theme: 'corporate',
    hero: {
      title: 'Hive CRM & CMS Platform',
      subtitle: 'Streamline customer relations, content publishing, lead management, and automated business workflows in one unified dashboard.',
      ctaText: 'Launch CRM Dashboard',
    },
    services: [
      {
        title: 'Lead & Contact Management',
        description: 'Track customer lifecycles, record interactions, and automate follow-ups seamlessly.',
      },
      {
        title: 'Dynamic Content Management',
        description: 'Publish blog posts, landing pages, and announcements without writing code.',
      },
      {
        title: 'Automation & Analytics',
        description: 'Real-time performance metrics, team activity logs, and revenue reporting.',
      },
    ],
    cta: { title: 'Transform Your Business Operations', btnText: 'Request Live Demo' },
  },
  'gpshele-dadhare': {
    theme: 'corporate',
    hero: {
      title: 'GPShele Dadhare Official Portal',
      subtitle: 'Modern, responsive, and secure digital platform engineered for GPShele Dadhare with dynamic content management.',
      ctaText: 'Explore Portal Features',
    },
    services: [
      {
        title: 'Institutional Showcase',
        description: 'Present achievements, announcements, staff profiles, and official directives with clarity.',
      },
      {
        title: 'Responsive Design',
        description: 'Optimized performance across smartphones, tablets, and desktop computers.',
      },
      {
        title: 'Secure Content CMS',
        description: 'Easy-to-use admin panel for quick news publishing and media gallery management.',
      },
    ],
    cta: { title: 'Need an Official Web Portal?', btnText: 'Contact HiveTechCore' },
  },
  'code-insight-academy': {
    theme: 'ecommerce',
    hero: {
      title: 'Code Insight Academy',
      subtitle: 'Next-generation EdTech platform offering interactive coding courses, student portals, and career tracks.',
      ctaText: 'Explore Courses',
    },
    services: [
      {
        title: 'Interactive Learning Management',
        description: 'Structured curriculums, video module delivery, and automated quiz evaluation.',
      },
      {
        title: 'Student & Instructor Portals',
        description: 'Dedicated dashboards for assignment submission, grading, and batch scheduling.',
      },
      {
        title: 'Certificates & Progress Tracking',
        description: 'Automated digital certificate generation upon course completion with verified credentials.',
      },
    ],
    cta: { title: 'Build Your Tech Academy Platform', btnText: 'Get Free Consultation' },
  },
  'pib-insurance': {
    theme: 'corporate',
    hero: {
      title: 'PIB Insurance Web Portal',
      subtitle: 'Comprehensive financial & insurance portal with instant quote calculation, claim filing, and policy management.',
      ctaText: 'Calculate Insurance Quote',
    },
    services: [
      {
        title: 'Instant Policy Calculator',
        description: 'Dynamic rate engines for health, motor, commercial, and life insurance policies.',
      },
      {
        title: 'Digital Claims Portal',
        description: 'Simplified document submission and real-time claim status tracking.',
      },
      {
        title: 'Customer Self-Service',
        description: 'Download policy certificates, schedule renewals, and manage payment methods online.',
      },
    ],
    cta: { title: 'Modernize Financial & Insurance Portals', btnText: 'Schedule Technical Demo' },
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
