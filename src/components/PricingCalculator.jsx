import { useEffect, useState } from 'react';
import './PricingCalculator.css';

const PricingCalculator = () => {
  const [pages, setPages] = useState(1);
  const [features, setFeatures] = useState({
    seo: false,
    cms: false,
    ecommerce: false,
    design: false,
    speed: true,
  });
  const [total, setTotal] = useState(8000);

  const calculateFinal = () => {
    let base = 8000;
    let pageCost = (pages - 1) * 2000;
    let featureCost = 0;

    if (features.seo) featureCost += 3000;
    if (features.cms) featureCost += 7000;
    if (features.ecommerce) featureCost += 15000;
    if (features.design) featureCost += 5000;

    setTotal(base + pageCost + featureCost);
  };

  useEffect(() => {
    calculateFinal();
  }, [pages, features]);

  const toggleFeature = (f) => setFeatures({ ...features, [f]: !features[f] });

  const getWhatsAppLink = () => {
    const text = `Hi Hive Tech Core! I'm interested in a project with ${pages} pages. Features: ${Object.entries(
      features
    )
      .filter(([k, v]) => v)
      .map(([k]) => k.toUpperCase())
      .join(', ')}. Estimated Quote: ₹${total}`;
    return `https://wa.me/91[YOUR_NUMBER]?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="calculator-wrapper glass-card">
      <div className="calc-header">
        <h3>Project Cost Estimator</h3>
        <p>Get a real-time estimate for your custom engineering project.</p>
      </div>

      <div className="calc-body">
        <div className="calc-range">
          <label>
            Number of Pages: <span>{pages}</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
          />
        </div>

        <div className="calc-features-grid">
          <label className={`feat-chip ${features.seo ? 'active' : ''}`}>
            <input type="checkbox" onChange={() => toggleFeature('seo')} />
            Advanced SEO
          </label>
          <label className={`feat-chip ${features.cms ? 'active' : ''}`}>
            <input type="checkbox" onChange={() => toggleFeature('cms')} />
            Content Management (CMS)
          </label>
          <label className={`feat-chip ${features.ecommerce ? 'active' : ''}`}>
            <input type="checkbox" onChange={() => toggleFeature('ecommerce')} />
            E-commerce Logic
          </label>
          <label className={`feat-chip ${features.design ? 'active' : ''}`}>
            <input type="checkbox" onChange={() => toggleFeature('design')} />
            Premium Custom Design
          </label>
        </div>

        <div className="calc-result">
          <div className="estimate-label">Estimated Investment</div>
          <div className="estimate-value">₹{total.toLocaleString()}</div>
          <p className="estimate-note">
            *Final quote may vary based on specific technical requirements.
          </p>

          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-gold">
            Claim This Quote via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
