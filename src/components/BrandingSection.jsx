import logo from '../assets/logo_htc-removebg-preview.png';
import '../styles/branding.css';

const BrandingSection = () => {
  return (
    <section className="branding-premium-section">
      <div className="container branding-container">
        <div className="branding-logo-wrapper">
          <img src={logo} alt="Hive Tech Core Logo" className="branding-logo" />
        </div>
        <div className="branding-content">
          <div className="badge">Who We Are</div>
          <h1>
            hive<span>tech</span>core
          </h1>
          <p className="branding-lead">
            The digital heart of enterprise-grade innovation. We engineer secure, scalable, and
            sophisticated technologies for the visionaries of tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
