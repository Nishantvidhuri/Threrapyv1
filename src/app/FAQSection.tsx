"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice is required to avoid a cancellation fee.",
  },
  {
    question: "How long is each session?",
    answer: "Sessions are typically 50 minutes long.",
  },
  {
    question: "What ages do you work with?",
    answer: "I work with adults (18+) from diverse backgrounds.",
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can use the contact form above or email serena@blakepsychology.com.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="bg-black/70 w-full h-full py-16 px-4">
        <div className="max-w-3xl mx-auto" ref={containerRef}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
            style={{ fontFamily: "'Domine', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.question}
                ref={(el) => {
                  cardsRef.current[idx] = el!;
                }}
                className="border border-gray-200 rounded-lg bg-white/90 shadow"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-4 transition-transform ${
                      open === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {open === idx && (
                  <div className="px-6 pb-4 text-gray-700 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 