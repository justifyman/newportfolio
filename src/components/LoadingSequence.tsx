import React, { useState, useEffect } from "react";

const TestPageTransition = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Your actual content underneath */}
      <div style={{ height: "100vh", backgroundColor: "#7ec8e3", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "black" }}>Here is your REAL site content!</h1>
      </div>

      {/* Black overlay */}
      {visible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "black",
            zIndex: 9999,
            transition: "transform 0.5s ease-in-out",
            transform: visible ? "translateY(0)" : "translateY(-100%)",
          }}
        />
      )}
    </>
  );
};

export default TestPageTransition;
