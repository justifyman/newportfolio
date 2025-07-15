import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      // Stage 0: Black screen (0.3 seconds)
      setTimeout(() => setStage(1), 300),
      // Stage 1: Black slides up to reveal purple (0.3 seconds)
      setTimeout(() => setStage(2), 600),
      // Stage 2: Purple slides right to reveal black (0.3 seconds)
      setTimeout(() => setStage(3), 900),
      // Stage 3: Black slides down to reveal site (0.3 seconds)
      setTimeout(() => {
        setStage(4);
        setTimeout(onComplete, 300);
      }, 1200),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Purple background - always there but hidden initially */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500" />

      {/* Stage 0 & 1: Black screen that slides up */}
      {stage < 2 && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ y: 0 }}
          animate={{ 
            y: stage >= 1 ? '-100%' : 0 
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut"
          }}
        />
      )}

      {/* Stage 2: Purple slides right to reveal black */}
      {stage >= 2 && stage < 3 && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500"
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut"
          }}
        />
      )}

      {/* Stage 3: Black background that slides down */}
      {stage >= 2 && (
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ y: stage >= 3 ? 0 : '100%' }}
          animate={{ 
            y: stage >= 3 ? '100%' : '100%'
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default LoadingSequence;