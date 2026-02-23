import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="service-card"
      onClick={() => navigate(`/service/${service.id}`)}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -14, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img src={service.img} alt={service.title} />
      <div className="card-content">
        <h2>{service.title}</h2>
        {service.price && <p>{service.price}</p>}
        <span className="btn-text" style={{ marginTop: '12px' }}>
          Learn More →
        </span>
      </div>
    </motion.div>
  );
}
