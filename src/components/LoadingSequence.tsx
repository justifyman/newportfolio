import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      // Stage 0: Black screen (1 second)
      setTimeout(() => setStage(1), 1000),
      // Stage 1: Black slides up to reveal purple (1 second)
      setTimeout(() => setStage(2), 2000),
      // Stage 2: Purple slides right to reveal black (1 second)
      setTimeout(() => setStage(3), 3000),
      // Stage 3: Black slides down to reveal site (1 second)
      setTimeout(() => {
        setStage(4);
        setTimeout(onComplete, 500); // Small delay before showing main site
      }, 4000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Stage 0: Initial black screen */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: 0 }}
        animate={{ 
          y: stage >= 1 ? '-100%' : 0 
        }}
        transition={{ 
          duration: 1, 
          ease: "easeInOut",
          delay: stage >= 1 ? 0 : 0
        }}
      />

      {/* Stage 1: Purple background revealed */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: stage >= 1 && stage < 2 ? 1 : 0,
          x: stage >= 2 ? '100%' : 0
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: stage >= 1 ? 0.8 : 0 },
          x: { duration: 1, ease: "easeInOut", delay: stage >= 2 ? 0 : 0 }
        }}
      />

      {/* Stage 2: Black background revealed again */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: stage >= 2 && stage < 3 ? 1 : 0,
          y: stage >= 3 ? '100%' : 0
        }}
        transition={{ 
          opacity: { duration: 0.3, delay: stage >= 2 ? 0.8 : 0 },
          y: { duration: 1, ease: "easeInOut", delay: stage >= 3 ? 0 : 0 }
        }}
      />

      {/* Loading indicator during transitions */}
      <AnimatePresence>
        {stage < 4 && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-lexend"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingSequence;