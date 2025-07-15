import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children?: React.ReactNode;
  onComplete?: () => void;
}

const PageTransition: FC<PageTransitionProps> = ({ children, onComplete }) => {
  const [showBlack, setShowBlack] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlack(false);
      if (onComplete) onComplete();
    }, 500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {children && <div className="relative z-0">{children}</div>}

      {/* Black overlay that slides up */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 30 }}
        />
      </div>
    </>
  );
};

export default PageTransition;
