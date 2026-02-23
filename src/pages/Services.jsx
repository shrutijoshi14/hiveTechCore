import PricingCalculator from '../components/PricingCalculator';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

import basic from '../assets/basic.png';
import custom from '../assets/custom.png';
import ecommerce from '../assets/ecommerce.png';
import landing from '../assets/landing.png';
import maintenance from '../assets/maintenance.png';
import redesign from '../assets/redesign.png';
import standard from '../assets/standard.png';

const services = [
  {
    id: 1,
    title: 'Basic Business Website',
    price: 'Starting ₹10,000',
    img: basic,
  },
  {
    id: 2,
    title: 'Standard Business Website',
    price: 'Starting ₹22,000',
    img: standard,
  },
  {
    id: 3,
    title: 'Website Redesign & Optimization',
    price: 'Starting ₹18,000',
    img: redesign,
  },
  {
    id: 4,
    title: 'Website Maintenance & Support',
    price: 'Starting ₹2,000',
    img: maintenance,
  },
  {
    id: 5,
    title: 'Custom Website Development',
    price: 'Starting ₹30,000',
    img: custom,
  },
  {
    id: 6,
    title: 'Landing Pages for Lead Generation',
    price: 'Starting ₹8,000',
    img: landing,
  },
  {
    id: 7,
    title: 'E-commerce Solution',
    price: 'Starting ₹45,000',
    img: ecommerce,
  },
];

const packages = [
  {
    name: 'Basic Spark',
    price: '₹8,000',
    target: 'Landings & Single Pages',
    features: [
      'High-Performance Landing Page',
      'Mobile-Responsive Design',
      'Contact Form Integration',
      'Basic SEO Optimization',
      '3-5 Days Delivery',
    ],
    highlight: false,
  },
  {
    name: 'Standard Ignite',
    price: '₹22,000',
    target: 'Full Business Evolution',
    features: [
      'Up to 5 Custom Pages',
      'Advanced SEO & PageSpeed',
      'WhatsApp Integration',
      'CMS for Blog/Content',
      '1 Month Support',
    ],
    highlight: true,
  },
  {
    name: 'Premium Fusion',
    price: '₹45,000+',
    target: 'Enterprise Ecosystems',
    features: [
      'E-commerce / Web App',
      'Custom User Dashboards',
      'Advanced Premium UX',
      'API Integrations',
      '3 Months Premium Support',
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="services-page">
      <div className="container">
        {/* HERO */}
        <div className="services-hero">
          <h1>
            Solutions <span>Engineered for Growth</span>
          </h1>
          <p className="lead-desc">
            From high-performance business architectures to secure e-commerce ecosystems, we
            engineer digital solutions that scale with your success.
          </p>
        </div>

        {/* PRICING PACKAGES */}
        <div className="section-header">
          <h2 className="section-title">Strategic Packages</h2>
          <p className="section-subtitle">Fixed-price engineering designed for business clarity.</p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`pricing-card glass-card ${pkg.highlight ? 'featured' : ''}`}>
              {pkg.highlight && <div className="popular-badge">Most Popular</div>}
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <p className="pkg-target">{pkg.target}</p>
              <ul className="pkg-features">
                {pkg.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <button className={`btn-${pkg.highlight ? 'gold' : 'outline-gold'}`}>
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* INTERACTIVE CALCULATOR */}
        <div className="section-header" style={{ marginTop: '120px' }}>
          <h2 className="section-title">Custom Estimate</h2>
          <p className="section-subtitle">Fine-tune your requirements and get an instant quote.</p>
        </div>
        <PricingCalculator />

        {/* ALL SERVICES GRID */}
        <div className="section-header" style={{ marginTop: '120px' }}>
          <h2 className="section-title">A-La-Carte Services</h2>
          <p className="section-subtitle">
            Specific engineering interventions for your existing platforms.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
