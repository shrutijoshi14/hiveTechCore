import { motion } from 'framer-motion';
import officeImg2 from '../assets/office2.png';
import '../styles/About.css';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="about-page-premium">
      {/* HERO SECTION */}
      <section className="about-hero-minimal">
        <div className="container">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
            Architecting the <span>Digital Future</span>
          </motion.h1>
          <motion.p className="hero-sub" initial="hidden" animate="visible" variants={fadeUp}>
            Hive Tech Core is a remote-first technology partner dedicated to building the
            foundations of tomorrow's most innovative businesses.
          </motion.p>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="container grid-2">
          <motion.div
            className="philosophy-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src={officeImg2} alt="Innovation Hub" className="rounded-img" />
            <div className="innovation-overlay glass-card">
              <h4>Digital Native</h4>
              <p>Remote Excellence • Global Impact</p>
            </div>
          </motion.div>
          <motion.div
            className="philosophy-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="badge">Who We Are</div>
            <h2>Engineering Trust Through Transparency</h2>
            <p className="lead-text">
              We specialize in remote collaboration, delivering flexible, efficient, and
              high-quality IT solutions without the constraints of traditional office barriers.
            </p>
            <p>
              Our team works with visionaries—from agile startups to established enterprises—to
              craft digital products that are not just user-friendly, but future-ready. We believe
              technology should be a multiplier for business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION/BELIEF GRID */}
      <section className="mission-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Growth Pillars</h2>
            <p className="section-subtitle">
              The principles that guide every line of code we write.
            </p>
          </div>

          <div className="belief-grid">
            {[
              {
                title: 'Strategic Precision',
                desc: 'Every project begins with a deep dive into your business objectives.',
              },
              {
                title: 'Target Oriented',
                desc: 'We focus on measurable outcomes: faster loads, higher conversion, better security.',
              },
              {
                title: 'Evolutionary Code',
                desc: 'We build architectures that scale seamlessly as your user base grows.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="belief-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
