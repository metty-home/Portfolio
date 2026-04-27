"use client";

import { useEffect, useRef } from "react";

interface Petal {
  id: number;
  size: number;
  left: number;
}

export default function BlossomPetalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const minSize = 15, maxSize = 30;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      const left = Math.random() * window.innerWidth;
      const id = ++counterRef.current;

      const span = document.createElement("span");
      span.className = "blossom_petal";
      span.style.cssText = `width:${size}px;height:${size}px;left:${left}px`;
      span.dataset.id = String(id);
      container.appendChild(span);

      // 10초 후 제거
      setTimeout(() => {
        const el = container.querySelector(`[data-id="${id}"]`);
        if (el) container.removeChild(el);
      }, 10000);
    };

    const interval = setInterval(createPetal, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="blossom_petal_con" ref={containerRef} />;
}
