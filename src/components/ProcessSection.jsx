import { motion } from 'framer-motion';
import '../styles/ProcessSection.css';

const StepSVGs = {
  discovery: (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="roadmap-svg">
      <rect width="400" height="300" rx="16" fill="#031726" />
      <circle cx="200" cy="150" r="90" fill="url(#grad1)" opacity="0.15" />
      <path d="M120 210L160 160L200 180L270 100" stroke="#FFB703" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="270" cy="100" r="8" fill="#FB8500" />
      <rect x="110" y="80" width="90" height="60" rx="8" fill="#0A2540" stroke="#FFB703" strokeWidth="2" />
      <line x1="125" y1="100" x2="185" y2="100" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      <line x1="125" y1="115" x2="165" y2="115" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="280" cy="200" r="30" fill="#0A2540" stroke="#FFB703" strokeWidth="2" />
      <path d="M280 185V200L290 210" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(90)">
          <stop stopColor="#FFB703" />
          <stop offset="1" stopColor="#FFB703" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="roadmap-svg">
      <rect width="400" height="300" rx="16" fill="#031726" />
      <rect x="70" y="60" width="260" height="180" rx="12" fill="#0A2540" stroke="#38BDF8" strokeWidth="2" />
      <rect x="70" y="60" width="260" height="30" rx="12" fill="#0F3456" />
      <circle cx="90" cy="75" r="5" fill="#EF4444" />
      <circle cx="105" cy="75" r="5" fill="#F59E0B" />
      <circle cx="120" cy="75" r="5" fill="#10B981" />
      <rect x="90" y="110" width="100" height="110" rx="8" fill="#031726" stroke="#FFB703" strokeWidth="2" />
      <rect x="205" y="110" width="105" height="45" rx="6" fill="#0F3456" />
      <rect x="205" y="165" width="105" height="55" rx="6" fill="#FFB703" opacity="0.8" />
      <circle cx="280" cy="80" r="22" fill="#FB8500" opacity="0.9" />
      <path d="M272 80L278 86L288 74" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="roadmap-svg">
      <rect width="400" height="300" rx="16" fill="#031726" />
      <rect x="80" y="60" width="240" height="180" rx="12" fill="#051F2E" stroke="#FFB703" strokeWidth="2" />
      <path d="M130 130L100 150L130 170" stroke="#FFB703" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M270 130L300 150L270 170" stroke="#FFB703" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M210 120L190 180" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
      <rect x="150" y="195" width="100" height="30" rx="6" fill="#0F3456" stroke="#FB8500" strokeWidth="1.5" />
      <circle cx="170" cy="210" r="4" fill="#10B981" />
      <circle cx="185" cy="210" r="4" fill="#10B981" />
      <circle cx="200" cy="210" r="4" fill="#10B981" />
    </svg>
  ),
  testing: (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="roadmap-svg">
      <rect width="400" height="300" rx="16" fill="#031726" />
      <path d="M200 60L280 100V160C280 210 200 240 200 240C200 240 120 210 120 160V100L200 60Z" fill="#0A2540" stroke="#FFB703" strokeWidth="3" />
      <path d="M175 145L192 162L225 125" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="90" r="18" fill="#FB8500" opacity="0.8" />
      <path d="M115 90H125M120 85V95" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="280" cy="210" r="22" fill="#0F3456" stroke="#38BDF8" strokeWidth="2" />
      <path d="M272 210L278 216L288 204" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  deployment: (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="roadmap-svg">
      <rect width="400" height="300" rx="16" fill="#031726" />
      <path d="M200 60C200 60 240 100 240 160C240 200 220 220 200 240C180 220 160 200 160 160C160 100 200 60 200 60Z" fill="url(#rocketGrad)" />
      <circle cx="200" cy="140" r="14" fill="#031726" stroke="#FFB703" strokeWidth="3" />
      <path d="M160 170L130 200V220L160 200V170Z" fill="#FB8500" />
      <path d="M240 170L270 200V220L240 200V170Z" fill="#FB8500" />
      <path d="M185 240L200 270L215 240H185Z" fill="#EF4444" />
      <rect x="80" y="210" width="90" height="45" rx="8" fill="#0A2540" stroke="#10B981" strokeWidth="2" />
      <text x="125" y="238" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">99.9% Uptime</text>
      <defs>
        <linearGradient id="rocketGrad" x1="200" y1="60" x2="200" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB703" />
          <stop offset="1" stopColor="#FB8500" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy Blueprint',
      subtitle: 'Understanding Goals & System Architecture',
      description:
        'We perform a deep dive into your business operations, target audience, and workflow bottlenecks. We define key metrics, tech stack selection, and a comprehensive project roadmap.',
      deliverables: ['Business Workflow Analysis', 'Tech Stack Selection', 'Project Timeline & Milestones'],
      svg: StepSVGs.discovery,
    },
    {
      number: '02',
      title: 'UI/UX & System Design',
      subtitle: 'Conversion Design & Database Schemas',
      description:
        'Our design team crafts modern, responsive wireframes and high-fidelity prototypes. Concurrently, software architects design scalable database schemas and API specifications.',
      deliverables: ['Interactive UI/UX Prototypes', 'Responsive Layout Designs', 'Database & API Specifications'],
      svg: StepSVGs.design,
    },
    {
      number: '03',
      title: 'Custom Engineering & Automation',
      subtitle: 'Websites, ERP, CRM & AI Integration',
      description:
        'We engineer your custom solution using high-performance React frameworks, secure backends, and automated workflow triggers for ERPs, CRMs, or web applications.',
      deliverables: ['High-Performance Codebase', 'Custom ERP / CRM Modules', 'Automated Workflows & APIs'],
      svg: StepSVGs.engineering,
    },
    {
      number: '04',
      title: 'Quality Assurance & Security Audit',
      subtitle: 'Vulnerability Testing & Performance Optimization',
      description:
        'Every line of code undergoes rigorous automated testing, security vulnerability scans, cross-browser compatibility checks, and load optimization for ultra-fast speeds.',
      deliverables: ['End-to-End QA Testing', 'Enterprise Security Audit', 'Speed & Performance Tuning'],
      svg: StepSVGs.testing,
    },
    {
      number: '05',
      title: 'Cloud Deployment & Support',
      subtitle: 'Go-Live, Staff Onboarding & Monitoring',
      description:
        'We execute smooth cloud deployment, configure SSL/CDN security, train your team on system usage, and provide 24/7 proactive maintenance and continuous support.',
      deliverables: ['Seamless Cloud Launch', 'Staff Onboarding & Manuals', '24/7 Monitoring & Support'],
      svg: StepSVGs.deployment,
    },
  ];

  return (
    <section className="process-roadmap-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="badge">Engineering Workflow</div>
          <h2 className="section-title">Our Development Roadmap</h2>
          <p className="section-subtitle">
            A step-by-step transparent process designed to build secure, scalable, and automated digital solutions.
          </p>
        </div>

        <div className="roadmap-timeline">
          <div className="timeline-line"></div>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={idx}
                className={`roadmap-item ${isEven ? 'item-reverse' : ''}`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* CONTENT SIDE */}
                <div className="roadmap-content-col">
                  <div className="roadmap-card glass-card">
                    <div className="card-top-bar">
                      <span className="step-badge">Step {step.number}</span>
                      <span className="step-subtitle">{step.subtitle}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>

                    <div className="deliverables-box">
                      <span className="deliverables-title">Key Deliverables:</span>
                      <ul>
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx}>
                            <span className="check-icon">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* NODE CENTER */}
                <div className="roadmap-node-col">
                  <div className="node-circle">{step.number}</div>
                </div>

                {/* SVG ILLUSTRATION SIDE */}
                <div className="roadmap-visual-col">
                  <div className="roadmap-svg-card glass-card">
                    {step.svg}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
