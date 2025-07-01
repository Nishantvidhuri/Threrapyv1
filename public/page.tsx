"use client";

import { useState } from "react";
import { Heart, HelpCircle } from "lucide-react";

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFAQToggle = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Dr. Blake will get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    {
      question: "What can I expect in my first session?",
      answer: "Your first session is a 50-minute consultation where we&apos;ll discuss what brings you to therapy, your goals, and how I can help. It&apos;s also an opportunity for you to ask questions and see if we&apos;re a good fit for working together."
    },
    {
      question: "How long does therapy typically last?",
      answer: "The duration varies depending on your needs and goals. Some clients see improvement in 8-12 sessions, while others prefer longer-term therapy. We&apos;ll regularly review your progress and adjust accordingly."
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes, I offer both in-person and secure video sessions. Virtual sessions are conducted through a HIPAA-compliant platform and are just as effective as in-person therapy."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "I have a 24-hour cancellation policy. If you need to cancel or reschedule, please let me know at least 24 hours in advance to avoid being charged for the session."
    },
    {
      question: "Do you accept insurance?",
      answer: "I am an out-of-network provider, which means I don&apos;t directly bill insurance companies. However, I can provide you with a superbill that you can submit to your insurance for potential reimbursement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-3xl mx-auto z-50 rounded-2xl bg-white/60 dark:bg-indigo-950/70 shadow-xl border border-indigo-100/60 dark:border-indigo-900/60 backdrop-blur-md flex items-center px-6 py-3 transition-all duration-300">
        <div className="flex flex-1 items-center gap-3">
          {/* Logo/Icon */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 shadow-sm mr-2">
            {/* Lucide Heart Icon */}
            <Heart size={28} strokeWidth={1.5} />
          </span>
          <span className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 tracking-tight select-none" style={{letterSpacing: '-0.01em'}}>Dr. Serena Blake</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="text-indigo-800 dark:text-indigo-100 text-base font-medium px-3 py-1 rounded-lg hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-colors duration-200">About</a>
          <a href="#services" className="text-indigo-800 dark:text-indigo-100 text-base font-medium px-3 py-1 rounded-lg hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-colors duration-200">Services</a>
          <a href="#faq" className="text-indigo-800 dark:text-indigo-100 text-base font-medium px-3 py-1 rounded-lg hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-colors duration-200">FAQ</a>
          <a href="#contact" className="text-indigo-800 dark:text-indigo-100 text-base font-medium px-3 py-1 rounded-lg hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image and overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHRoZXJhcHl8ZW58MHx8MHx8fDI%3D')",
            backgroundPosition: 'center 60%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            objectPosition: 'center 60%',
            filter: 'brightness(0.65) blur(0px)'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-indigo-900/40 to-white/40" aria-hidden="true" />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fadein">
          <p className="mb-3 text-lg font-medium text-indigo-100/90 tracking-wide animate-fadein-slow">
            Compassionate Therapy in San Francisco
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-xl animate-fadein">
            Find Healing, Growth, and Balance
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-100/90 animate-fadein-slow">
            Dr. Serena Blake, Ph.D.<br className="hidden md:block" /> Licensed Clinical Psychologist
          </h2>
          <div className="mb-4 animate-fadein-delay">
            <span className="text-indigo-200 bg-indigo-700/60 px-4 py-2 rounded-full font-semibold text-lg shadow-md">
              Supporting Your Journey to Wellbeing
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fadein-delay">
            <span className="bg-yellow-200/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow">
              <span>⭐</span> Top Rated Therapist
            </span>
            <span className="bg-white/80 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold shadow">
              10+ Years Experience
            </span>
            <span className="bg-white/80 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold underline shadow">
              500+ Clients Helped
            </span>
          </div>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 animate-fadein-delay"
          >
            Book a Free Consultation
          </a>
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-fadein-slow { animation: fadein 1.8s 0.3s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-fadein-delay { animation: fadein 2.2s 0.6s cubic-bezier(0.4,0,0.2,1) both; }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden">
        {/* Soft background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage: "radial-gradient(circle at 20% 40%, #c7d2fe 0%, transparent 60%), radial-gradient(circle at 80% 60%, #e0e7ff 0%, transparent 70%)"}} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 animate-fadein">
          {/* Portrait Card with Accent Bar */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <div className="relative w-44 h-56 rounded-3xl shadow-2xl bg-white/90 border-2 border-indigo-100 flex flex-col items-center justify-end overflow-hidden mb-6">
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-400 via-indigo-300 to-indigo-100 rounded-l-3xl" />
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx0aGVyYXB5fGVufDB8fDB8fHwy"
                alt="Therapist portrait"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
            {/* Speech bubble quote */}
            <div className="relative bg-white/90 border border-indigo-100 rounded-2xl px-6 py-4 shadow text-indigo-700 text-base max-w-xs mb-2 before:content-[''] before:absolute before:-top-4 before:left-10 before:w-0 before:h-0 before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white/90">
              <span className="italic">Healing is not a destination, but a journey we take together.</span>
            </div>
          </div>
          {/* Bio and Credentials */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-extrabold text-indigo-900 mb-2">Meet Dr. Serena Blake</h2>
              <div className="w-14 h-1 bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-100 rounded-full mb-6" />
              <p className="text-lg text-indigo-800 mb-4">
                I help individuals and couples find clarity, resilience, and connection. My approach is warm, collaborative, and rooted in evidence-based therapies. I believe every person deserves a safe, non-judgmental space to heal and grow.
              </p>
              <div className="flex items-center gap-3 flex-wrap text-indigo-700 text-sm font-medium mb-2">
                <span className="bg-indigo-100 px-3 py-1 rounded-full">Ph.D., Licensed Clinical Psychologist</span>
                <span className="bg-indigo-50 px-3 py-1 rounded-full">San Francisco, CA</span>
              </div>
            </div>
            {/* Horizontal scrollable cards for credentials */}
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
              <div className="min-w-[180px] bg-white/90 rounded-2xl shadow p-5 flex flex-col items-center border border-indigo-100">
                <div className="text-xl font-bold text-indigo-700 mb-1">10+ Years</div>
                <div className="text-xs text-indigo-700 mb-1">Experience</div>
                <div className="text-indigo-400 text-xs">500+ Clients Helped</div>
              </div>
              <div className="min-w-[180px] bg-white/90 rounded-2xl shadow p-5 flex flex-col items-center border border-indigo-100">
                <div className="font-semibold text-indigo-700 mb-1">Specializations</div>
                <ul className="text-indigo-600 text-xs space-y-1 text-center">
                  <li>Anxiety & Depression</li>
                  <li>Trauma & PTSD</li>
                  <li>Relationship Issues</li>
                  <li>Life Transitions</li>
                  <li>Stress Management</li>
                </ul>
              </div>
              <div className="min-w-[180px] bg-white/90 rounded-2xl shadow p-5 flex flex-col items-center border border-indigo-100">
                <div className="font-semibold text-indigo-700 mb-1">Education</div>
                <ul className="text-indigo-600 text-xs space-y-1 text-center">
                  <li>Ph.D. Clinical Psychology, Stanford</li>
                  <li>M.A. Psychology, Stanford</li>
                  <li>B.A. Psychology, UC Berkeley</li>
                </ul>
              </div>
              <div className="min-w-[180px] bg-white/90 rounded-2xl shadow p-5 flex flex-col items-center border border-indigo-100">
                <div className="font-semibold text-indigo-700 mb-1">Certifications</div>
                <ul className="text-indigo-600 text-xs space-y-1 text-center">
                  <li>Licensed Clinical Psychologist (CA #PSY12345)</li>
                  <li>EMDR Certified Therapist</li>
                  <li>CBT Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden">
        {/* Soft background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at 30% 70%, #c7d2fe 0%, transparent 60%), radial-gradient(circle at 80% 20%, #e0e7ff 0%, transparent 70%)"}} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 shadow">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0 0v-4m0 0c-2.21 0-4-1.79-4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h2 className="text-4xl font-extrabold text-indigo-900">Services & Fees</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 rounded-full" />
            </div>
            <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
              Compassionate, evidence-based therapy tailored to your needs. Choose the support that fits your journey.
            </p>
          </div>
          {/* Cards */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 pt-6 hide-scrollbar">
            {/* Individual Therapy */}
            <div className="relative bg-gradient-to-br from-indigo-100 via-white to-indigo-50 rounded-3xl shadow-xl p-8 flex flex-col items-center border border-indigo-100 animate-fadein">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
              <div className="w-14 h-14 rounded-full bg-indigo-200 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Individual Therapy</h3>
              <p className="text-indigo-700 mb-4 text-center">
                50-minute sessions focused on your personal growth, healing, and development of coping strategies.
              </p>
              <div className="text-3xl font-extrabold text-indigo-700 mb-2">$200</div>
              <div className="text-xs text-indigo-500 mb-4">per session</div>
              <ul className="text-sm text-indigo-700 space-y-1 mb-4 text-center">
                <li>Anxiety & Depression</li>
                <li>Trauma & PTSD</li>
                <li>Life Transitions</li>
                <li>Stress Management</li>
              </ul>
            </div>
            {/* Couples Therapy */}
            <div className="relative bg-gradient-to-br from-purple-100 via-white to-indigo-50 rounded-3xl shadow-xl p-8 flex flex-col items-center border border-indigo-100 animate-fadein-slow">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Couples Therapy</h3>
              <p className="text-purple-700 mb-4 text-center">
                75-minute sessions to improve communication, resolve conflicts, and strengthen your relationship.
              </p>
              <div className="text-3xl font-extrabold text-purple-700 mb-2">$250</div>
              <div className="text-xs text-purple-500 mb-4">per session</div>
              <ul className="text-sm text-purple-700 space-y-1 mb-4 text-center">
                <li>Communication Issues</li>
                <li>Conflict Resolution</li>
                <li>Trust & Infidelity</li>
                <li>Pre-marital Counseling</li>
              </ul>
            </div>
            {/* Free Consultation */}
            <div className="relative bg-gradient-to-br from-green-100 via-white to-indigo-50 rounded-3xl shadow-xl p-8 flex flex-col items-center border border-green-100 animate-fadein-delay">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-200 text-green-900 text-xs font-bold px-4 py-1 rounded-full shadow">Recommended Start</span>
              <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Free Consultation</h3>
              <p className="text-green-700 mb-4 text-center">
                20-minute phone consultation to discuss your needs and see if we&apos;re a good fit to work together.
              </p>
              <div className="text-3xl font-extrabold text-green-700 mb-2">Free</div>
              <div className="text-xs text-green-500 mb-4">no commitment</div>
              <ul className="text-sm text-green-700 space-y-1 mb-4 text-center">
                <li>Discuss your concerns</li>
                <li>Learn about my approach</li>
                <li>Ask questions</li>
                <li>No commitment required</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-fadein-slow { animation: fadein 1.8s 0.3s cubic-bezier(0.4,0,0.2,1) both; }
          .animate-fadein-delay { animation: fadein 2.2s 0.6s cubic-bezier(0.4,0,0.2,1) both; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at 80% 20%, #c7d2fe 0%, transparent 60%)"}} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 shadow mb-3">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 19v.01M12 15a3 3 0 10-3-3" /><circle cx="12" cy="12" r="9" /></svg>
            </span>
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-xl text-indigo-800">Answers to common questions about therapy and my practice</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl shadow-lg bg-white/90 border border-indigo-100 overflow-hidden ${
                  activeFAQ === index ? "ring-2 ring-indigo-300" : ""
                }`}
              >
                <button
                  className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none group"
                  onClick={() => handleFAQToggle(index)}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shadow">
                    <HelpCircle size={22} strokeWidth={2} />
                  </span>
                  <span className="flex-1 text-lg md:text-xl font-semibold text-indigo-900 group-hover:text-indigo-700 transition-colors">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-indigo-400 transform transition-transform duration-300 ${activeFAQ === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-5 transition-all duration-300 ${
                    activeFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <p className="text-indigo-700 text-base leading-relaxed animate-fadein">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Animations */}
          <style jsx>{`
            @keyframes fadein {
              0% { opacity: 0; transform: translateY(20px);}
              100% { opacity: 1; transform: translateY(0);}
            }
            .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1) both; }
          `}</style>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey toward healing and growth? Contact me today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">dr.blake@therapy.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">123 Therapy Street<br />San Francisco, CA 94102</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Resources</h4>
                <p className="text-sm text-gray-600 mb-4">
                  If you&apos;re experiencing a mental health emergency, please contact:
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• National Suicide Prevention Lifeline: 988</div>
                  <div>• Crisis Text Line: Text HOME to 741741</div>
                  <div>• Emergency Services: 911</div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell me about what brings you to therapy and any questions you may have..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at 70% 30%, #c7d2fe 0%, transparent 60%)"}} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-indigo-100 px-8 py-10 flex flex-col items-center gap-4">
            {/* Heart Icon from Lucide */}
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 shadow mb-2">
              <Heart size={36} strokeWidth={1.5} />
            </span>
            <h3 className="text-2xl font-bold text-indigo-900 mb-1">Dr. Serena Blake</h3>
            <p className="text-indigo-700 text-center mb-2">
              Licensed Clinical Psychologist<br />
              Providing compassionate therapy in San Francisco
            </p>
            <div className="flex gap-4 mb-2">
              <a href="#about" className="text-indigo-600 hover:text-indigo-800 font-medium transition">About</a>
              <a href="#services" className="text-indigo-600 hover:text-indigo-800 font-medium transition">Services</a>
              <a href="#faq" className="text-indigo-600 hover:text-indigo-800 font-medium transition">FAQ</a>
              <a href="#contact" className="text-indigo-600 hover:text-indigo-800 font-medium transition">Contact</a>
            </div>
            <div className="text-sm text-indigo-400 mt-2">
              &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
