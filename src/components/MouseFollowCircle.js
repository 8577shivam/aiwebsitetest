import React, { useState, useEffect } from "react";

const MouseFollowCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMouseClicked) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseDown = () => {
      setIsMouseClicked(true);
    };

    const handleMouseUp = () => {
      setIsMouseClicked(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMouseClicked]);

  return (
    <div
      className="mouseefect"
      style={{ position: "absolute", left: position.x, top: position.y }}
    >
      {!isMouseClicked && (
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "transparent",
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2)",
            animation: "pulse 4s infinite",
          }}
        ></div>
      )}
    </div>
  );
};

export default MouseFollowCircle;
