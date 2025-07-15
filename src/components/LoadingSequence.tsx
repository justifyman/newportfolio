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

      {/* Black overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "black",
            transition: "transform 500ms ease-in-out",
            transform: showBlack ? "translateY(0)" : "translateY(-100%)",
            zIndex: 30,
          }}
        />
      </div>
    </>
  );
};

export default PageTransition;
