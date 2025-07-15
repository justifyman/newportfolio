import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),   // Black slides up
      setTimeout(() => setStage(2), 600),   // Blue slides up
      setTimeout(() => {
        setStage(3);
        onComplete();
      }, 900),                              // Animation complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Blue Background: always there under overlays */}
      <div className="absolute inset-0 bg-blue-600" />

      {/* Stage 0 & 1: Black overlay slides up */}
      <AnimatePresence>
        {(stage === 0 || stage === 1) && (
          <motion.div
            key="black"
            className="absolute inset-0 bg-black"
            initial={{ y: 0 }}
            animate={{ y: stage === 1 ? '-100%' : 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Stage 2: Blue overlay slides up to reveal site */}
      <AnimatePresence>
        {stage === 2 && (
          <motion.div
            key="blue"
            className="absolute inset-0 bg-blue-600"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingSequence;
