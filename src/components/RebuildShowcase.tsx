"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Truck, Check, ArrowRight, RefreshCw } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function RebuildShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section id="rebuilds" className="relative py-24 bg-white overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <AnimateOnScroll direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>FACTORY RECONDITIONING CRAFTSMANSHIP</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Factory Rebuilt Machinery. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">
                Fraction of New Machine Cost.
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <p className="text-base text-slate-600 leading-relaxed">
              At Haiges Machinery, our master rebuild technicians completely disassemble, overhaul, re-wire, bench-test, and polish industrial laundry equipment — delivering like-new reliability with warranty protection.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Slider Visual Box */}
          <div className="lg:col-span-8">
            <AnimateOnScroll direction="right" delay={0.2}>
              <div
                className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 select-none cursor-ew-resize group"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* "AFTER" Image (Base layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/rebuild_after.jpg"
                    alt="Factory Reconditioned Commercial Laundry Equipment - After Restoration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-black tracking-wide shadow-md uppercase">
                    ✓ After: Haiges Reconditioned
                  </div>
                </div>

                {/* "BEFORE" Image (Clipped overlay with identical dimensions) */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src="/images/rebuild_before.jpg"
                    alt="Aged Commercial Laundry Machines - Before Reconditioning"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover grayscale brightness-90 contrast-110"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-black tracking-wide shadow-md uppercase">
                    Before: Decommissioned Core
                  </div>
                </div>

                {/* Dividing Slider Line */}
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-red-600 border-2 border-white text-white flex items-center justify-center shadow-xl">
                    <div className="flex items-center text-xs font-bold font-mono tracking-tighter">
                      ◀▶
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-700 shadow-md pointer-events-none">
                  Drag slider left/right to compare transformation
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Rebuild Guarantee & Freight Features */}
          <div className="lg:col-span-4 space-y-6">
            <AnimateOnScroll direction="left" delay={0.3}>
              <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-cyan-700 text-xs font-mono uppercase font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>The Haiges Rebuild Standard</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Rigorous 40-Point Overhaul & Bench Testing
                </h3>

                <div className="space-y-3">
                  {[
                    "Complete teardown to bare framework & sandblast",
                    "Brand-new Japanese heavy-duty main bearings & seals",
                    "Rewired electrical harnesses & updated inverter drives",
                    "Factory replacement valves, air bladders & belts",
                    "Full-cycle live steam & high-RPM water extraction test",
                    "Backed by comprehensive Haiges equipment warranty",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Direct Carrier Freight Shipping</div>
                      <div className="text-[11px] text-slate-500">
                        We ship reconditioned washers & dryers to all 50 states at discounted freight rates.
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#quote-form"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-black shadow-md shadow-red-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Reconditioned Inventory List</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
