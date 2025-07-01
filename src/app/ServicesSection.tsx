"use client";
import { useEffect, useRef } from "react";
import { HeartPulse, Users, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <HeartPulse className="h-8 w-8 text-[#bfae9c] drop-shadow-lg" />,
    title: "Anxiety & Stress Management",
    desc: "Support for managing anxiety, overwhelm, and daily stressors with evidence-based techniques.",
  },
  {
    image: "https://images.unsplash.com/photo-1609240127475-0b0fe270fe77?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Users className="h-8 w-8 text-[#bfae9c] drop-shadow-lg" />,
    title: "Relationship Counseling",
    desc: "Guidance for couples and individuals to improve communication, resolve conflict, and build healthy connections.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1672292536199-7a4cf2b78318?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <ShieldCheck className="h-8 w-8 text-[#bfae9c] drop-shadow-lg" />,
    title: "Trauma Recovery",
    desc: "Compassionate care for healing from past trauma, using trauma-informed and integrative approaches.",
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section  className="w-full  text-[#e8d8c3]  relative"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1602475063211-3d98d60e3b1f?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
        <div className="bg-black/70 py-24 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Domine', serif" }}>
          Services & Specialties
        </h2>
        <p className="text-lg mb-12 text-[#c7b9a6]" style={{ fontFamily: "'Domine', serif" }}>
          Personalized therapy for individuals and couples, tailored to your unique needs and goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {services.map((s, i) => (
              <div
              key={s.title}
              ref={(el) => {
                cardsRef.current[i] = el!;
              }}
              className="relative bg-[#23201c]/90 rounded-3xl shadow-2xl p-0 flex flex-col items-stretch overflow-hidden group transition-transform hover:-translate-y-2 hover:shadow-3xl duration-300"
              >
              <div className="relative w-full h-56 md:h-52 overflow-hidden flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute left-6 -bottom-7 bg-[#181818] rounded-full p-3 shadow-lg border-2 border-[#bfae9c] -translate-y-10 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-1/4 -left-1/4 w-1/2 h-[200%] bg-gradient-to-br from-white/30 to-transparent rotate-12 blur-2xl" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-7 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Domine', serif" }}>{s.title}</h3>
                <p className="text-base text-[#c7b9a6] flex-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          <div className="flex-1 bg-gradient-to-br from-[#e8d8c3]/90 to-[#bfae9c]/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center border-2 border-[#bfae9c]">
            <h3 className="text-3xl font-bold mb-2 text-[#23201c]" style={{ fontFamily: "'Domine', serif" }}>
              Session Fees
            </h3>
            <ul className="mb-2 text-2xl text-[#23201c] font-semibold">
              <li className="mb-1">$200 <span className="text-base text-[#23201c]/80 font-normal">/ individual session</span></li>
              <li>$240 <span className="text-base text-[#23201c]/80 font-normal">/ couples session</span></li>
            </ul>
            <p className="text-base text-[#23201c]/80 mt-2">Sliding scale available upon request.</p>
          </div>
        </div>
                  </div>
      </div>
    </section>
  );
}
