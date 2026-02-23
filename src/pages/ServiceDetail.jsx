import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Services.css';

import basic from '../assets/basic.png';
import custom from '../assets/custom.png';
import ecommerce from '../assets/ecommerce.png';
import landing from '../assets/landing.png';
import maintenance from '../assets/maintenance.png';
import redesign from '../assets/redesign.png';
import standard from '../assets/standard.png';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const data = {
  1: {
    title: 'Basic Business Website',
    basePrice: 10000,
    img: basic,
    includes: [
      '1-page professional business website',
      'Mobile-friendly & fully responsive design',
      'WhatsApp click-to-chat button',
      'Call Now button',
      'Google Map integration',
      'Basic SEO',
      'Fast-loading website',
      'Free SSL',
      '1 round revision',
      'Delivery in 5–7 days',
    ],
    addons: [
      { name: 'Google My Business setup', price: 2500 },
      { name: 'Website maintenance', price: 2000 },
      { name: 'Hosting + domain', price: 4000 },
    ],
  },

  2: {
    title: 'Standard Business Website',
    basePrice: 22000,
    img: standard,
    includes: [
      '5-page professional website',
      'Custom UI/UX design',
      'WhatsApp & Call button',
      'Contact form',
      'Google Analytics',
      'Basic SEO',
      '1 month support',
    ],
    addons: [
      { name: 'Advanced SEO', price: 4000 },
      { name: 'Landing page', price: 6000 },
    ],
  },

  /* ============================= */
  /* REDESIGN */
  /* ============================= */

  3: {
    title: 'Website Redesign & Optimization',
    img: redesign,
    plans: [
      {
        name: '🟢 Basic Redesign (1–3 pages)',
        price: 18000,
        features: [
          'UI refresh',
          'Mobile responsiveness fixes',
          'Basic speed optimization',
          'CTA improvement',
        ],
      },
      {
        name: '🔵 Standard Redesign (4–6 pages)',
        price: 22000,
        popular: true,
        features: [
          'Complete UI/UX redesign',
          'Mobile & tablet optimization',
          'Layout restructuring',
          'Basic SEO',
          'Advanced speed optimization',
        ],
      },
      {
        name: '🔴 Advanced Redesign & Optimization',
        price: 30000,
        features: [
          'Conversion-focused redesign',
          'SEO-friendly structure',
          'Core Web Vitals optimization',
          'Lead-focused CTAs',
          'Security enhancements',
        ],
      },
    ],
    addons: [
      { name: 'Extra revision', price: 5000 },
      { name: 'Content rewriting support', price: 4000 },
      { name: 'Advanced SEO setup', price: 6000 },
    ],
  },

  /* ============================= */
  /* MAINTENANCE */
  /* ============================= */

  4: {
    title: 'Website Maintenance & Support',
    img: maintenance,
    plans: [
      {
        name: '🟢 Basic Maintenance',
        price: 2000,
        features: [
          'Minor text changes (up to 3 times / year)',
          'Image replacement (client provided)',
          'Basic security check',
          'Uptime monitoring',
          'WhatsApp / call button check',
          '❌ No new sections / pages',
          '❌ No design changes',
        ],
      },

      {
        name: '🔵 Standard Maintenance',
        price: 5000,
        billingNote: '💰 ₹5,000 / year (or ₹500 / month) ✅ Most Popular',
        bestFor: 'WordPress / 5–10 page websites',
        popular: true,
        features: [
          'Monthly backups',
          'Plugin / theme updates',
          'Security monitoring',
          'Speed & performance check',
          'Content updates (up to 5 requests / year)',
          'Form & lead testings',
          'Broken link fixes',
          '❌ Major redesign not included',
        ],
      },

      {
        name: '🔴 Premium Maintenance',
        price: 8000,
        billingNote: '₹8,000 – ₹12,000 / year (or ₹1,000 / month)',
        bestFor: 'Business-critical websites',
        features: [
          'Priority support',
          'Weekly backups',
          'Security hardening',
          'Speed optimization checks',
          'Content updates (unlimited minor)',
          'Downtime issue fixing',
          'Technical support via WhatsApp / email',
        ],
      },
    ],
    addons: [
      { name: 'Extra page update', price: 1000 },
      { name: 'Emergency fix', price: 1500 },
      { name: 'Monthly SEO monitoring', price: 2000 },
    ],
  },

  /* ============================= */
  /* Custom */
  /* ============================= */

  5: {
    title: 'Custom Website Development',
    img: custom,
    plans: [
      {
        name: 'Custom Basic Website',
        price: 30000,
        bestFor: ['Unique design required', 'More advanced than normal business website'],
        features: [
          'Custom UI/UX design (from scratch)',
          '6–8 pages',
          'Fully responsive (mobile, tablet, desktop)',
          'Contact forms & integrations',
          'Basic on-page SEO',
          'Speed optimization',
          'SSL & basic security',
          '1 month post-launch support',
        ],
      },

      {
        name: 'Custom Standard Website',
        price: 50000,
        bestFor: ['Lead generation / service businesses', 'Multiple custom sections & logic'],
        features: [
          'Complete custom design & layout',
          '8–15 pages',
          'Advanced forms (conditional logic)',
          'CMS integration (WordPress / headless)',
          'On-page SEO (all pages)',
          'Google Analytics & Search Console',
          'Performance optimization',
          '2–3 months support',
        ],
      },

      {
        name: 'Custom Advanced / Web App',
        price: 100000,
        bestFor: ['Portals, dashboards, SaaS, marketplaces'],
        features: [
          'UI/UX research & wireframes',
          'Frontend + backend development',
          'User authentication (login/signup)',
          'Admin panel / dashboard',
          'Database integration',
          'API integrations',
          'Security hardening',
          'Long-term support',
        ],
      },
    ],
    addons: [
      { name: 'Extra page', price: 3000 },
      { name: 'Advanced animations', price: 5000 },
    ],
  },

  6: {
    title: 'Landing Pages for Lead Generation',
    img: landing,
    plans: [
      {
        name: 'Single Landing Page',
        price: 6000,
        bestFor: ['– Ads (Google / Instagram / Facebook)', '– Single offer / service'],
        features: [
          'Conversion-focused layout (CTA driven)',
          '1-page design',
          'Mobile-first responsive',
          'Lead form (email / WhatsApp integration)',
          'Call-to-action buttons',
          'Fast-loading optimization',
          'Basic SEO (title + meta)',
          'Thank You page (basic)',
          '❌ Ads management not included',
          '❌ Copywriting not included (client content)',
        ],
      },

      {
        name: '🔵 Conversion Optimized Landing',
        price: 12000,
        popular: true,
        features: [
          'Custom UI/UX design',
          'Conversion strategy (section flow)',
          'Advanced forms',
          'A/B-ready structure',
          'Speed optimization (ads friendly)',
          'Analytics & event tracking',
          '1–2 revisions',
        ],
      },
      // { name: "🔴 Funnel Landing System", price: 18000, features: ["Multi-step funnel","Email integration","Analytics"] }
    ],
    addons: [
      { name: 'A/B version', price: 4000 },
      { name: 'Facebook Pixel setup', price: 2500 },
    ],
  },

  7: {
    title: 'E-commerce Solution',
    img: ecommerce,
    plans: [
      {
        name: '🟢 Starter E-commerce',
        price: 45000,
        bestFor: ['– Small shops', ' 10–20 products'],
        features: [
          'WooCommerce / Shopify setup',
          'Mobile-friendly design',
          'Product listing',
          'Cart & checkout',
          'Payment gateway integration',
          'Order management',
          'Basic SEO',
          'SSL & security',
          '1 month support',
          '❌ Advanced features not included',
        ],
      },
      {
        name: '🔵 Standard E-commerce',
        price: 65000,
        popular: true,
        features: [
          'Custom e-commerce design',
          'Up to 50 products',
          'Category & filter setup',
          'User account system',
          'Order confirmation & email notifications',
          'Speed & performance optimization',
          'SEO-friendly website structure',
          '2–3 months post-launch support',
          'Payment gateway setup',
        ],
      },

      {
        name: 'Advanced / Custom E-commerce',
        price: 120000,
        features: [
          'Fully custom design',
          'Large product catalog',
          'Advanced filters & search functionality',
          'Multiple payment gateway integration',
          'Inventory management system',
          'Admin dashboard',
          'Enhanced security hardening',
          'Ongoing technical support',
          'Payment gateway setup',
        ],
      },
    ],
    addons: [{ name: 'Extra product setup', price: 5000 }],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = data[id];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  if (!service) {
    return <h2 style={{ padding: '40px' }}>Service not found</h2>;
  }

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.name === addon.name)
        ? prev.filter((a) => a.name !== addon.name)
        : [...prev, addon]
    );
  };

  const base = service.plans ? selectedPlan?.price || 0 : service.basePrice;

  const total = base + selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <>
      <Navbar />

      <section className="detail">
        <button
          className="btn-outline-gold"
          onClick={() => navigate(-1)}
          style={{ marginBottom: '40px' }}
        >
          ← Back
        </button>

        <div className="detail-container">
          <div className="detail-image">
            <img src={service.img} alt={service.title} />
          </div>

          <div className="detail-content">
            <h1>{service.title}</h1>

            {/* NORMAL SERVICES */}
            {!service.plans && (
              <>
                <h3>Base Price: ₹{service.basePrice}</h3>

                <ul>
                  {service.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* PLANS (REDESIGN + MAINTENANCE) */}
            {service.plans && (
              <>
                <div className="redesign-plans-vertical">
                  {service.plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`plan-block ${selectedPlan?.name === plan.name ? 'active' : ''}`}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <h3>
                        {plan.name}
                        {plan.popular && <span className="popular-badge">Most Popular</span>}
                      </h3>

                      <h2>₹{plan.price}</h2>

                      {selectedPlan?.name === plan.name && (
                        <>
                          {plan.billingNote && <p className="billing-note">{plan.billingNote}</p>}

                          {plan.bestFor && (
                            <div className="best-for">
                              <strong>Best For:</strong>
                              <ul>
                                {(Array.isArray(plan.bestFor) ? plan.bestFor : [plan.bestFor]).map(
                                  (b, i) => (
                                    <li key={i}>{b}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                          <ul className="plan-details">
                            {plan.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <h4 style={{ marginTop: '30px' }}>Optional Add-ons</h4>

                {service.addons.map((addon, i) => (
                  <label key={i} className="addon-item">
                    <input type="checkbox" onChange={() => toggleAddon(addon)} />
                    {addon.name} — ₹{addon.price}
                  </label>
                ))}
              </>
            )}

            <button
              className="btn-gold"
              style={{ padding: '16px 40px', fontSize: '18px', width: '100%', marginTop: '40px' }}
              disabled={service.plans && !selectedPlan}
              onClick={() =>
                navigate('/contact', {
                  state: {
                    service: selectedPlan
                      ? `${service.title} - ${selectedPlan.name}`
                      : service.title,
                    total,
                  },
                })
              }
            >
              Contact Us & Claim Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
