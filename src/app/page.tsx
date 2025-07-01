"use client";

import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { gsap } from "gsap";import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import EnterOverlay from "./EnterOverlay";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";
import AudioDisk from "./AudioDisk";
// ... existing code ...
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("loaderExit"));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoaderFinish = () => {
    setLoading(false);
    setShowNavbar(true);
    setShowOverlay(true);
  };

  useEffect(() => {
    if (showNavbar && navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [showNavbar]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  const handleEnter = () => {
    setShowOverlay(false);
    window.dispatchEvent(new Event("enableAudio"));
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div
        ref={navbarRef}
        style={{ opacity: showNavbar ? 1 : 0, pointerEvents: showNavbar ? 'auto' : 'none' }}
      >
        {showNavbar && <Navbar />}
      </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Loader onFinish={handleLoaderFinish} />
        </div>
      )}
     {showOverlay && <EnterOverlay onEnter={handleEnter} />}
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <AudioDisk />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
