"use client";

import React from "react";
import ThreeMachineDrum from "./ThreeMachineDrum";
import { Cpu, ShieldCheck, Gauge, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Interactive3DSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-200/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Engineering Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateOnScroll direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700">
                <Cpu className="w-3.5 h-3.5" />
                <span>3D INTERACTIVE MACHINERY LAB</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Precision Engineering. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">
                  Industrial Heavy-Duty Longevity.
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <p className="text-base text-slate-600 leading-relaxed">
                Every commercial extractor and dryer supplied by Haiges Machinery is engineered for extreme industrial duty cycles. Interact with our 3D drum model to inspect the AISI 304 stainless steel perforation, hydrodynamic lifter ribs, and high-G extraction dynamics.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
                    <Gauge className="w-4 h-4" />
                    <span>Up to 450G Extraction</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Cuts dryer cycle times by up to 40%, drastically reducing facility gas and electric utility costs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cast-Iron Bearing Housings</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Built to withstand 24/7 continuous operation in hotels, commercial plants, and busy laundromats.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.5}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#quote-form"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-md shadow-red-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>Request Equipment Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:8005422828"
                  className="text-xs font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Engineering Support: (800) 542-2828
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Interactive 3D Canvas Viewport */}
          <div className="lg:col-span-6">
            <AnimateOnScroll direction="left" delay={0.3}>
              <ThreeMachineDrum />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
