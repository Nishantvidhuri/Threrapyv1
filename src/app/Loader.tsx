import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  // Animate out when parent triggers
  useEffect(() => {
    if (!onFinish) return;
    // Listen for a custom event to trigger exit
    const handler = () => {
      gsap.to(containerRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: onFinish,
      });
    };
    window.addEventListener("loaderExit", handler);
    return () => window.removeEventListener("loaderExit", handler);
  }, [onFinish]);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-white">
      <img
        ref={imgRef}
        src="/original-29f85bd3848806189beeeb5e16f9acb5.gif"
        alt="Loading..."
        className="w-90 h-90"
      />
    </div>
  );
}