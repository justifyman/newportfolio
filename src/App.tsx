import { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
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

      {/* These elements only appear after loading is complete */}
      {!isLoading && (
        <>
          {/* Copyright text in bottom right corner */}
          <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
            <p className="text-gray-800 text-xs font-light">justifydev @ 2025</p>
          </div>
          
          {/* Gradient overlay box in bottom right corner */}
          <div 
            className="absolute bottom-0 right-0 w-64 h-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #c4c4c4, #b6b6b6)'
            }}
          ></div>
        </>
      )}

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
    </main>
  );
}