import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children?: React.ReactNode;
  onComplete?: () => void;
}

const PageTransition: FC<PageTransitionProps> = ({ children, onComplete }) => {
  const [showBlack, setShowBlack] = useState(true);
  const [blueSlidUp, setBlueSlidUp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBlack(false), 500);

    const timer2 = setTimeout(() => {
      setBlueSlidUp(true);
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
        {/* Black slides up */}
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />

        {/* Blue slides up AFTER black */}
        <div
          className={`absolute inset-0 bg-blue-900 transition-transform duration-500 ease-in-out ${
            blueSlidUp ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ zIndex: 20 }}
        />
      </div>
    </>
  );
};

export default PageTransition;
