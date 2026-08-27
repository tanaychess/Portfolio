import { motion } from 'framer-motion'

/**
 * Wraps children in a fade + rise-in animation that fires once when the
 * element enters the viewport. Centralizing this keeps every section's
 * scroll animation consistent instead of hand-rolled per component.
 */
export default function RevealOnScroll({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
