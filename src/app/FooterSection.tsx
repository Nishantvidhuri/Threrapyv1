export default function FooterSection() {
  return (
    <footer className="w-full bg-[#070707] text-[#e8d8c3] border-t border-[#222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10 md:gap-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none" style={{ fontFamily: "'Domine', serif" }}>
            More<br />Than<br />Therapy
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-md" style={{ fontFamily: "'Domine', serif" }}>
            This is a journey toward clarity, compassion, and emotional freedom.
          </p>
        </div>
        {/* Right: Video */}
        <div className="w-full max-w-4xl mx-auto aspect-video  translate-x-20 rounded-2xl shadow-lg overflow-hidden">
  <video
    src="/footer.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-contain"
  />
</div>

      </div>
    </footer>
  );
} 