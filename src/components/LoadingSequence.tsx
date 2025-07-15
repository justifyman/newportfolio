import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800); // Wait for animation to complete
    }, 1000); // Wait 1 second before starting slide up

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={{ y: 0 }}
      animate={{ y: isAnimating ? 0 : '-100%' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default LoadingSequence;