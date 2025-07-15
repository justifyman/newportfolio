import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
      <motion.button 
        onClick={() => scrollToSection('home')}
        className="text-xl font-bold tracking-ultra-tight hover:text-gray-300 transition-colors relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">
          justify._.dev
        </span>
        <motion.div
          className="absolute inset-0"
        />
      </motion.button>

      <div className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <motion.button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm tracking-tighter transition-all duration-300 relative group ${
              activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-gray-300'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <span className="relative z-10">{item.label}</span>
            
            {/* Active indicator */}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#BA55D3] to-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#BA55D3]/20 to-white/20 opacity-0 group-hover:opacity-100 rounded transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Mobile menu indicator */}
      <motion.div 
        className="md:hidden flex flex-col space-y-1 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-6 h-0.5 bg-white"
            animate={{ 
              scaleX: [1, 0.8, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.2 
            }}
          />
        ))}
      </motion.div>
    </nav>
  );
};

export default Navigation;