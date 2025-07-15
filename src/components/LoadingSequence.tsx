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
      setTimeout(() => setStage(2), 600),   // Purple slides right
      setTimeout(() => setStage(3), 900),   // Black slides down
      setTimeout(() => {
        setStage(4);
        onComplete();
      }, 1200),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Solid Purple Background */}
      <div className="absolute inset-0 bg-purple-700" />

      {/* Stage 0 & 1: Black slides up to reveal purple */}
      {stage < 2 && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ y: 0 }}
          animate={{ y: stage >= 1 ? '-100%' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}

      {/* Stage 2: Purple slides right to reveal black again */}
      {stage === 2 && (
        <motion.div
          className="absolute inset-0 bg-purple-700"
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}

      {/* Stage 3: Black slides down to reveal site */}
      {stage === 3 && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default LoadingSequence;
