import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedPage({ children, id }) {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id}
        layout
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AnimatedButton({ children }) {
  const animations = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AnimatedBackgroundColor({ children, color }) {
  <motion.div
    animate={{ backgroundColor: color }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>;
}

export { AnimatedPage, AnimatedButton, AnimatedBackgroundColor };
