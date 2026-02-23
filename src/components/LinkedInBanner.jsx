import './LinkedInBanner.css';

const LinkedInBanner = () => {
  return (
    <div className="hq-banner">
      <div className="banner-left">
        <div className="brand-tag">HIVE TECH CORE</div>
        <h1>
          Senior React <br />
          <span>Architect</span>
        </h1>
        <p>
          I build high-performance, secure, and <br />
          sophisticated digital ecosystems.
        </p>
        <div className="stats">
          <div className="stat">
            <span>5+</span> Yrs Exp
          </div>
          <div className="stat">
            <span>100%</span> Success
          </div>
        </div>
      </div>
      <div className="banner-right">
        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>AWS</span>
          <span>Figma</span>
        </div>
        <div className="cta-overlay">Available for Hire</div>
      </div>
    </div>
  );
};

export default LinkedInBanner;
