"use client";

import { useState, useEffect, useCallback } from "react";

interface CountdownOverlayProps {
  duration?: number;
  onComplete: () => void;
  lang?: "en" | "ko" | "es";
}

const labels = {
  en: { generating: "Generating your result…", ready: "Almost ready!", seconds: "s" },
  ko: { generating: "결과를 생성하고 있습니다…", ready: "거의 완료!", seconds: "초" },
  es: { generating: "Generando tu resultado…", ready: "¡Casi listo!", seconds: "s" },
};

export default function CountdownOverlay({ duration = 10, onComplete, lang = "en" }: CountdownOverlayProps) {
  const [remaining, setRemaining] = useState(duration);
  const t = labels[lang];

  useEffect(() => {
    if (remaining <= 0) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(timer);
  }, [remaining, onComplete]);

  const progress = ((duration - remaining) / duration) * 100;
  const circumference = 2 * Math.PI * 54;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 max-w-sm w-full mx-4 animate-scale-in">
        {/* Circular Progress */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="54" fill="none"
              stroke="url(#grad)" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-indigo-600 tabular-nums">{remaining}</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.seconds}</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-lg font-bold text-slate-800">
            {remaining > 3 ? t.generating : t.ready}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
            style={{ width: `${progress}%`, transition: "width 1s linear" }}
          />
        </div>
      </div>
    </div>
  );
}
