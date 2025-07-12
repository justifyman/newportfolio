import { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import ProjectsPage from './components/ProjectsPage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrollingBlocked, setIsScrollingBlocked] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrollingBlocked) return;
      
      setIsScrollingBlocked(true);
      
      const currentScrollX = window.scrollX;
      const pageWidth = window.innerWidth;
      const currentPageIndex = Math.round(currentScrollX / pageWidth);
      
      let targetPage = currentPageIndex;
      if (e.deltaY > 0 && currentPageIndex === 0) {
        targetPage = 1;
      } else if (e.deltaY < 0 && currentPageIndex === 1) {
        targetPage = 0;
      }
      
      if (targetPage !== currentPageIndex) {
        const targetScrollX = targetPage * pageWidth;
        window.scrollTo({
          left: targetScrollX,
          behavior: 'smooth'
        });
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrollingBlocked(false);
      }, 1000);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isScrollingBlocked]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex h-screen">
      {/* Main Landing Page */}
      <div className="w-screen h-screen flex-shrink-0 relative overflow-hidden inline-block">
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

        {!isLoading && (
          <p className="absolute bottom-4 right-4 text-gray-800 text-xs font-light">justifydev @ 2025</p>
        )}
      
        <div 
          className="absolute bottom-0 right-0 w-64 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #c4c4c4, #b6b6b6)'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>

        {!isLoading && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <p className="text-white text-sm font-light transform rotate-12 animate-bounce">scroll to explore projects</p>
          </div>
        )}
      </div>
      
      {/* Projects Page */}
      <div className="w-screen h-screen flex-shrink-0 inline-block">
        <ProjectsPage />
      </div>
    </main>
  );
}
