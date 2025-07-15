import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children?: React.ReactNode;
  onComplete?: () => void;
}

const PageTransition: FC<PageTransitionProps> = ({ children, onComplete }) => {
  const [showBlack, setShowBlack] = useState(true);
  const [showBlue, setShowBlue] = useState(true);

  useEffect(() => {
    // Black slides up first (500ms)
    const timer1 = setTimeout(() => setShowBlack(false), 500);

    // Then blue slides up (starts after black finishes)
    const timer2 = setTimeout(() => {
      setShowBlue(false);
      if (onComplete) onComplete();
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <>
      {children && <div className="relative z-0">{children}</div>}

      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        {/* Black layer slides up */}
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />

        {/* Blue layer slides up AFTER black */}
        <div
          className={`absolute inset-0 bg-blue-900 transition-transform duration-500 ease-in-out ${
            showBlack
              ? "translate-y-0"        // stay put while black slides
              : showBlue
              ? "translate-y-0"       // blue stays put until its turn
              : "-translate-y-full"   // then blue slides up
          }`}
          style={{ zIndex: 20 }}
        />
      </div>
    </>
  );
};

export default PageTransition;
