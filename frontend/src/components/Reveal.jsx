import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export function Reveal({ children, y = 24, delay = 0, duration = 0.9, className, once = true, testId }) {
  return (
    <motion.div
      data-testid={testId}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// Line-by-line masked reveal used in hero
export function MaskLines({ lines, className = "", delay = 0, stagger = 0.09 }) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export default Reveal;
