import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),   // Black slides up
      setTimeout(() => setStage(2), 600),   // Blue slides up
      setTimeout(() => {
        setStage(3);
        onComplete();
      }, 900),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Stage 0 & 1: Black overlay slides up to reveal blue */}
      {stage < 2 && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ y: 0 }}
          animate={{ y: stage >= 1 ? '-100%' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}

      {/* Stage 1 & 2: Blue overlay slides up to reveal site */}
      {stage >= 1 && stage < 3 && (
        <motion.div
          className="absolute inset-0 bg-blue-600"
          initial={{ y: stage === 1 ? 0 : '-100%' }}
          animate={{ y: stage === 2 ? '-100%' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default LoadingSequence;
