import { motion, AnimatePresence } from "framer-motion";
import bee from "../assets/beeDoole.png";
import "../styles/SuccessBee.css";

export default function SuccessBee({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="success-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Bee flying in */}
          <motion.img
            src={bee}
            alt="Success Bee"
            className="success-bee"
            initial={{ x: "-120%", y: 100, rotate: -20, scale: 0.6 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          />

          {/* Success Card */}
          <motion.div
            className="success-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>Request Sent Successfully!</h3>
            <p>
              Our team will review your idea and get back to you very soon.
            </p>

            <button onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
