"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 50%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 50%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section
    id="about"
    className="relative w-full text-white py-28 px-6 md:px-0"
    style={{
      backgroundImage: `
        url('https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        linear-gradient(to bottom, rgba(30, 25, 20, 0.95), rgba(10, 10, 10, 0.95))
      `,
      backgroundBlendMode: 'overlay',
 // warm charcoal base
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
    }}
  >
  
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Text */}
        <div ref={textRef} className="flex-1 text-left">
          <h2
            className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight"
            style={{ fontFamily: "'Domine', serif" }}
          >
            About Dr. Serena Blake
          </h2>
          <p
            className="text-lg leading-relaxed text-gray-300 mb-6"
            style={{ fontFamily: "'Domine', serif" }}
          >
            Finding moments to reconnect with ourselves can feel nearly impossible in a world that moves so fast.
            I believe therapy offers a meaningful space to slow down, reflect, and grow.
            It provides the support, tools, and clarity needed to better understand ourselves and the challenges we face.
          </p>
          <p
            className="text-lg leading-relaxed text-gray-300 mb-6"
            style={{ fontFamily: "'Domine', serif" }}
          >
            I support this journey with a foundation in compassionate listening, psychological expertise,
            and a deep respect for each individuals experience. I hold a Doctorate in Clinical Psychology from the
            University of Colorado and have worked in community mental health clinics, hospital programs, and private practice.
          </p>
          <p
            className="text-lg leading-relaxed text-gray-300"
            style={{ fontFamily: "'Domine', serif" }}
          >
            My therapeutic style is integrative—blending psychodynamic, cognitive-behavioral, and mindfulness-based methods.
            I specialize in helping people navigate identity exploration, life transitions, trauma, and relationships with authenticity and care.
          </p>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className="flex-shrink-0 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg"
            alt="Dr. Serena Blake portrait"
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
