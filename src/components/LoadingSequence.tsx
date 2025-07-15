import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const [showBlack, setShowBlack] = useState(true);
  const [showBlue, setShowBlue] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBlack(false), 500);
    const timer2 = setTimeout(() => setShowBlue(false), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Actual page content: always rendered */}
      <div className="relative z-0">{children}</div>

      {/* Transition overlays */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        {/* Black overlay slides up */}
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />

        {/* Blue overlay slides up after black */}
        <div
          className={`absolute inset-0 bg-blue-950 transition-transform duration-500 ease-in-out ${
            showBlue ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 20 }}
        />
      </div>
    </>
  );
};

export default PageTransition;
