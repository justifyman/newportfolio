import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSequence from './components/LoadingSequence';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;
    
    if (isLoading) return;
    
    const sections = ['home', 'work', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };


  if (isLoading) {
    return <LoadingSequence onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-black text-white font-lexend overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
          borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navigation activeSection={activeSection} />
      </motion.div>
      
      <div className="pt-20">
        <Home />
        <Work />
        <About />
        <Contact />
      </div>
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
