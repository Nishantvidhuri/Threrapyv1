"use client";
import { useEffect, useRef, RefObject, useState } from "react";

export default function MouseFollower({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) {
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    let frame: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.current.x - 48}px, ${pos.current.y - 48}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frame);
    };
  }, [containerRef]);

  return (
    <div
      ref={followerRef}
      className={`pointer-events-none absolute top-0 left-0 z-[9999] w-24 h-24 rounded-full bg-[#6d6d5f] flex items-center justify-center transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ willChange: "transform" }}
    >
      <span className="text-white font-bold text-xl select-none">Scroll</span>
    </div>
  );
}