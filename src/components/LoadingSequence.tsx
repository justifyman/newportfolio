import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children?: React.ReactNode;
  onComplete?: () => void;  // optional
}

const PageTransition: FC<PageTransitionProps> = ({ children, onComplete }) => {
  const [showBlack, setShowBlack] = useState(true);
  const [showBlue, setShowBlue] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBlack(false), 500);
    const timer2 = setTimeout(() => {
      setShowBlue(false);
      if (onComplete) onComplete();  // call onComplete when done
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <>
      {/* Render actual site content only if children exist */}
      {children && <div className="relative z-0">{children}</div>}

      {/* Overlays on top */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />

        <div
          className={`absolute inset-0 bg-blue-900 transition-transform duration-500 ease-in-out ${
            showBlue ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 20 }}
        />
      </div>
    </>
  );
};

export default PageTransition;
