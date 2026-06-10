"use client";

import { useEffect, useState } from "react";

export function LogoLoader() {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(() => setHidden(true), 600);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-[600ms]"
      style={{
        background: "#f5f2ed",
        opacity: hiding ? 0 : 1,
        visibility: hiding ? "hidden" : "visible",
      }}
    >
      <div className="relative w-40 h-40">
        <svg
          className="absolute pointer-events-none"
          style={{
            inset: "-14px",
            width: "calc(100% + 28px)",
            height: "calc(100% + 28px)",
          }}
          viewBox="0 0 188 188"
        >
          <circle
            cx="94"
            cy="94"
            r="90"
            fill="none"
            stroke="#2c2c2c"
            strokeWidth="2.4"
            strokeLinecap="round"
            style={{
              strokeDasharray: 570,
              strokeDashoffset: 570,
              animation:
                "drawRing 1.2s cubic-bezier(0.4,0,0.2,1) 0.15s forwards",
            }}
          />
        </svg>

        <img
          src="/assets/Link.svg"
          alt="Logo"
          className="w-full h-full block"
          style={{
            borderRadius: "18px",
            opacity: 0,
            transform: "scale(0.78)",
            animation:
              "logoReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            borderRadius: "18px",
            background: "#f5f2ed",
            animation:
              "curtainLift 1.05s cubic-bezier(0.76,0,0.24,1) 0.3s forwards",
          }}
        />
      </div>

      <div className="flex gap-2 mt-8">
        {[1.2, 1.45, 1.7].map((delay, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#2c2c2c",
              opacity: 0,
              animation: `dotFade 0.4s ease ${delay}s forwards`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
