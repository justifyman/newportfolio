import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const [showBlack, setShowBlack] = useState(true);
  const [showBlue, setShowBlue] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBlack(false), 500);   // Black slides up
    const timer2 = setTimeout(() => setShowBlue(false), 1000);   // Blue slides up
    const timer3 = setTimeout(() => setIsTransitioning(false), 1500); // Show site

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (isTransitioning) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Black overlay - topmost */}
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />

        {/* Blue overlay - middle */}
        <div
          className={`absolute inset-0 bg-blue-950 transition-transform duration-500 ease-in-out ${
            showBlue ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 20 }}
        />

        {/* Content stays hidden below during transition */}
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            !showBlue ? "translate-y-full" : "translate-y-0"
          }`}
          style={{ zIndex: 10 }}
        >
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageTransition;
