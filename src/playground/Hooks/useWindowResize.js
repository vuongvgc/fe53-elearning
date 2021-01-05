import React, { useState, useEffect } from "react";

// Custom hook, lấy width và height của trình duyệt
export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = (evt) => {
    // Vị trí trỏ chuột: window.clientWidth, window.clientHeight
    const { innerWidth, innerHeight } = window;
    setWindowSize({ width: innerWidth, height: innerHeight });
  };

  return [windowSize.width, windowSize.height];
}
