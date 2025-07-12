import { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import ProjectsPage from './components/ProjectsPage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      const newPage = Math.max(0, Math.min(1, currentPage + scrollDirection));
      
      if (newPage !== currentPage) {
        setIsScrolling(true);
        
        const targetScroll = newPage * window.innerWidth;
        
        window.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        
        // Update page state after scroll starts
        setCurrentPage(newPage);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage, isScrolling]);

  // Track actual scroll position to sync state
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const scrollLeft = window.scrollX;
        const pageWidth = window.innerWidth;
        const calculatedPage = Math.round(scrollLeft / pageWidth);
        if (calculatedPage !== currentPage) {
          setCurrentPage(calculatedPage);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, isScrolling]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black relative">
      {/* Main Landing Page */}
      <div className="min-h-screen w-screen relative overflow-hidden inline-block">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
              <p className="text-white text-lg font-medium">hi, thanks for visiting my site<br/>the site is loading, one moment please</p>
            </div>
          </div>
        )}

        

        {/* Spline 3D Scene */}
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/qDqIeZrc8TLpWxTR/scene.splinecode"
            />
          </div>
        </Suspense>

        {/* Copyright text in bottom right corner */}
        {!isLoading && (
          <p className="absolute bottom-4 right-4 text-gray-800 text-xs font-light">justifydev @ 2025</p>
        )}
      
        {/* Gradient overlay box in bottom right corner */}
        <div 
          className="absolute bottom-0 right-0 w-64 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #c4c4c4, #b6b6b6)'
          }}
        ></div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>

        {/* Scroll indicator */}
        {!isLoading && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <p className="text-white text-sm font-light transform rotate-12 animate-bounce">scroll to explore projects</p>
          </div>
        )}
      </div>
      
      {/* Projects Page */}
      <div className="w-screen inline-block">
        <ProjectsPage />
      </div>
    </main>
  );
}

        