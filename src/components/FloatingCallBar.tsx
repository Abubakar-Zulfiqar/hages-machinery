"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowRight, X } from "lucide-react";

export default function FloatingCallBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-red-500/40 rounded-2xl p-3.5 shadow-2xl shadow-slate-400/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 animate-rocking">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Direct Tech Dispatch
            </div>
            <a
              href="tel:8476693300"
              className="text-base font-black text-slate-950 hover:text-red-600 transition-colors tracking-wide"
            >
              (847) 669-3300
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#quote-form"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black shadow-md shadow-red-600/25 transition-all flex items-center gap-1 shrink-0"
          >
            <span>Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
