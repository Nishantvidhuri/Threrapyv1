"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 2,
          },
        }
      );
    }

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 2,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="contact"
      className="w-full text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="bg-black/70 w-full h-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Form Side */}
            <div
              className="w-full md:w-1/2 order-2 md:order-1"
              ref={leftRef}
            >
              <div className="text-left mb-6">
                <h2
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "'Domine', serif" }}
                >
                  Get in Touch
                </h2>
                <p
                  className="text-base text-gray-300"
                  style={{ fontFamily: "'Domine', serif" }}
                >
                  Your journey towards healing and self-discovery is unique, and it would be a privilege to be a part of it. Please reach out to schedule a consultation or to ask any questions you may have.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Image and Info Side */}
            <div
              className="w-full md:w-1/2 order-1 md:order-2"
              ref={rightRef}
            >
              <div
                className="w-full h-[500px] rounded-2xl bg-cover bg-center mb-6"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/4098288/pexels-photo-4098288.jpeg')`,
                  backgroundPosition: "right center",
                }}
              ></div>
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-center">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "'Domine', serif" }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:serena@blakepsychology.com"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      serena@blakepsychology.com
                    </a>
                  </div>
                </div>
                {/* Phone Card */}
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-center">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "'Domine', serif" }}
                    >
                      Phone
                    </h3>
                    <p className="text-gray-300 text-sm">(323) 555-0192</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
