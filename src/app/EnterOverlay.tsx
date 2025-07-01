"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function EnterOverlay({ onEnter }: { onEnter: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.focus();
    }
  }, []);

  const handleExit = () => {
    if (exiting) return;
    setExiting(true);

    const overlay = overlayRef.current;
    if (!overlay) return onEnter();

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: onEnter,
    });

    tl.to(overlay, {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      filter: "blur(12px)",
    });
  };

  return (
    <div
      ref={overlayRef}
      tabIndex={-1}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1816] via-[#141414] to-[#1a1816] bg-opacity-95 transition-opacity duration-700 cursor-pointer"
      style={{ backdropFilter: "blur(10px)" }}
      onClick={handleExit}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleExit();
      }}
    >
      <div className="flex flex-col items-center text-center px-6">
        <h1
          className="text-5xl md:text-6xl font-bold text-[#e8d8c3] mb-6"
          style={{ fontFamily: "'Domine', serif" }}
        >
          Breathe In.
        </h1>
        <p
          className="text-lg md:text-2xl text-[#cbbfae] mb-16 max-w-md"
          style={{ fontFamily: "'Domine', serif" }}
        >
          Tap to begin.
        </p>
        <div className="w-5 h-5 bg-[#e8d8c3] rounded-full animate-ping opacity-80" />
      </div>
    </div>
  );
}
