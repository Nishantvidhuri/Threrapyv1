"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioDisk() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // Try to autoplay muted on mount
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
    // On first user interaction, unmute and play
    const onUserInteract = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play();
        setMuted(false);
        setPlaying(true);
      }
      window.removeEventListener("pointerdown", onUserInteract);
    };
    window.addEventListener("pointerdown", onUserInteract);

    // Listen for custom event from overlay
    const onEnableAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play();
        setMuted(false);
        setPlaying(true);
      }
    };
    window.addEventListener("enableAudio", onEnableAudio);

    return () => {
      window.removeEventListener("pointerdown", onUserInteract);
      window.removeEventListener("enableAudio", onEnableAudio);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
      setMuted(false);
      audioRef.current.muted = false;
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/audio1.mp3" preload="auto" muted={muted} />
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-br from-[#e8d8c3] to-[#bfae9c] shadow-2xl flex items-center justify-center border-4 border-[#23201c] group focus:outline-none"
        style={{ animation: playing ? "spin 2s linear infinite" : undefined }}
        aria-label={playing ? "Pause audio" : "Play audio"}
      >
        <span className="absolute inset-0 rounded-full bg-[#23201c]/10" />
        <span className="relative text-[#23201c]">
          {playing ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
        </span>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </button>
    </>
  );
}