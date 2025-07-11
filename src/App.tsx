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
          {/* Navigation Cards */}
          {/* ABOUT card - robot's left (from its POV), tilted left */}
          <div 
            className="absolute top-1/3 left-1/4 z-20 cursor-pointer transform -rotate-12 hover:scale-105 transition-all duration-300"
            style={{
              transform: 'rotate(-12deg) translateZ(0)',
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-lg tracking-wide">ABOUT</h3>
            </div>
          </div>

          {/* CONTACT card - below ABOUT */}
          <div 
            className="absolute top-1/2 left-1/5 z-20 cursor-pointer transform -rotate-6 hover:scale-105 transition-all duration-300"
            style={{
              transform: 'rotate(-6deg) translateZ(0)',
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-lg tracking-wide">CONTACT</h3>
            </div>
          </div>

          {/* PROJECTS card - beside robot's right leg */}
          <div 
            className="absolute bottom-1/3 right-1/3 z-20 cursor-pointer transform rotate-8 hover:scale-105 transition-all duration-300"
            style={{
              transform: 'rotate(8deg) translateZ(0)',
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-lg tracking-wide">PROJECTS</h3>
            </div>
          </div>

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