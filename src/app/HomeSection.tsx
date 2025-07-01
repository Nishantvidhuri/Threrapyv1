"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollower from "./MouseFollower";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Healing begins with being heard.",
    "You talk. We listen. Change follows.",
    "Let's untangle what's holding you back.",
    "Growth starts when you feel safe.",
    "Your story matters. Every word of it.",
    "Clarity is born in conversation.",
    "It’s okay to not be okay. Let’s start there.",
    "You are not alone in this.",
    "Sometimes all it takes is one honest moment.",
    "We’re here to hold space for your healing.",
  ];

  useEffect(() => {
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current,
        {
          autoAlpha: 0,
          scale: 0.96,
          y: 40,
          filter: "blur(8px)",
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          delay: 0.4,
          duration: 1.6,
          ease: "power4.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    if (headingRef.current && introRef.current) {
      gsap.fromTo(
        [introRef.current, headingRef.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }

    if (para2Ref.current) {
      gsap.fromTo(
        para2Ref.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: para2Ref.current,
            start: "top 100%",
            end: "top 60%",
            scrub: 0.5,
          },
        }
      );
    }

    if (quotesRef.current && heroRef.current) {
      gsap.fromTo(
        quotesRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -40,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "top+=200 top",
            scrub: true,
          },
        }
      );
    }

    // Typewriter quote animation
    const animateQuote = () => {
      if (!quotesRef.current) return;
      const quote = quotes[currentQuote];
      const quoteContainer = quotesRef.current;

      quoteContainer.innerHTML = "";
      const letters = quote.split("");

      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.innerText = letter === " " ? "\u00A0" : letter;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.transition = "opacity 0.2s";
        quoteContainer.appendChild(span);

        setTimeout(() => {
          span.style.opacity = "1";
        }, i * 60);
      });

      setTimeout(() => {
        quoteContainer.style.transition = "opacity 0.6s";
        quoteContainer.style.opacity = "0";

        setTimeout(() => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);
          quoteContainer.style.opacity = "1";
        }, 700);
      }, letters.length * 60 + 2000);
    };

    animateQuote();
  }, [currentQuote]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[170vh] flex items-start justify-start overflow-hidden"
      style={{
        cursor: "url(https://cdn.custom-cursor.com/packs/564/pack525.png), auto",
      }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.pexels.com/photos/3978594/pexels-photo-3978594.jpeg"
          alt=""
          className="w-full h-full object-stretch"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60px] flex items-center justify-center z-20 pointer-events-none"
      >
        <p
          ref={quotesRef}
          className="text-2xl md:text-3xl font-semibold text-[#e8d8c3] text-center"
          style={{ fontFamily: "'Domine', serif", whiteSpace: "nowrap" }}
        ></p>
      </div>

      <MouseFollower containerRef={heroRef} />

      <div
        ref={heroContentRef}
        className="relative z-10 flex flex-col items-start justify-start h-full w-full max-w-7xl mx-auto pt-88 px-8"
      >
        <p
          ref={introRef}
          className="text-white text-2xl md:text-3xl font-light mb-10 max-w-2xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
        >
          Compassionate care, transformative conversations, and a safe space
          where your healing begins.
          <br />
          We gently guide you through emotional clarity, resilience, and
          growth—one intentional session at a time.
        </p>
        <h1
          ref={headingRef}
          className="text-white font-extrabold text-[10vw] leading-[0.9] tracking-tight mb-10"
          style={{ textShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
        >
          Therapy
          <br />
          Reimagined
        </h1>
        <p
          ref={para2Ref}
          className="text-white text-lg md:text-xl font-normal max-w-xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
        >
          Inspired by empathy, grounded in science, and devoted to helping you
          feel seen, heard, and whole.
          <br />
          Our work is more than talk—it&apos;s a journey of self-discovery and
          meaningful healing.
        </p>
      </div>
    </section>
  );
}
