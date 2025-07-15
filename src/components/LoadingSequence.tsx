import { FC, useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBlack, setShowBlack] = useState(true);
  const [showBlue, setShowBlue] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBlack(false), 500);
    const timer2 = setTimeout(() => setShowBlue(false), 1000);
    const timer3 = setTimeout(() => {
      setShowContent(true);
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Black screen - first layer */}
        <div
          className={absolute inset-0 bg-black transition-transform duration-500 ease-in-out ${
            showBlack ? "translate-y-0" : "-translate-y-full"
          }}
          style={{ zIndex: 30 }}
        />

        {/* Dark blue screen - second layer */}
        <div
          className={absolute inset-0 bg-blue-950 transition-transform duration-500 ease-in-out ${
            showBlue ? "translate-y-0" : "-translate-y-full"
          }}
          style={{ zIndex: 20 }}
        />

        {/* Content lift-up transition */}
        <div
          className={absolute inset-0 transition-transform duration-500 ease-in-out ${
            showContent ? "translate-y-full" : "translate-y-0"
          }}
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