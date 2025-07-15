import React, { useEffect, useState } from "react";

const TestSlide = () => {
  const [showBlack, setShowBlack] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBlack(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background content */}
      <div style={{ height: "100%", backgroundColor: "lightblue" }}>
        <h1 style={{ textAlign: "center", paddingTop: "40vh" }}>Site Content</h1>
      </div>

      {/* Black overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          transform: showBlack ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s ease-in-out",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default TestSlide;
