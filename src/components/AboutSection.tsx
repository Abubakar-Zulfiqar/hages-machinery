"use client";

import React from "react";
import { History, Award, Phone, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AboutSection() {
  const milestones = [
    {
      year: "Late 1800s",
      title: "First & Second Generation",
      desc: "Originated with commercial dye shops and dry cleaning operations in the Midwest, pioneering garment treatment and textile care.",
    },
    {
      year: "1967",
      title: "Haiges Machinery Founded",
      desc: "Transitioned from laundry processing to heavy machinery distribution and industrial engineering, setting up headquarters in Huntley, IL.",
    },
    {
      year: "1980s - 2000s",
      title: "Regional Expansion & Rebuild Facility",
      desc: "Built full-scale reconditioning shops, engineering custom laundromat buildouts, and supplying certified field service across WI, IL, & IN.",
    },
    {
      year: "Present Day",
      title: "5th Generation Industry Benchmark",
      desc: "State-of-the-art parts distribution, automated chemical dispensing, nationwide shipping, and dedicated 24/48h field tech coverage.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateOnScroll direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
                <History className="w-3.5 h-3.5" />
                <span>THE HAIGES FAMILY LEGACY</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Five Generations of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
                  Laundry Excellence.
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <p className="text-base text-slate-600 leading-relaxed">
                The Haiges family legacy in the cleaning industry spans five generations, beginning in the late 1800s with dye shops and dry-cleaners. Over time, the family transitioned from laundry processing to premier equipment supply.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <p className="text-base text-slate-600 leading-relaxed">
                Since 1967, <span className="text-slate-900 font-bold">Haiges Machinery</span> has been the trusted authority in delivering innovative commercial and industrial laundry solutions across Illinois, Indiana, and Wisconsin. We specialize in top-quality laundry and dry cleaning systems tailored to healthcare, hospitality, laundromats, industrial plants, and fire stations.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <div className="text-xl font-black text-slate-900">5 Generations</div>
                  <div className="text-xs text-slate-500">Unbroken lineage of laundry industry know-how</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <div className="text-xl font-black text-red-600">Since 1967</div>
                  <div className="text-xs text-slate-500">Serving as your strategic commercial partner</div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.6}>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#quote-form"
                  className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md shadow-red-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:8476693300"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200 shadow-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>(847) 669-3300</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Interactive Heritage Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateOnScroll direction="left" delay={0.3}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg relative">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-600" />
                  <span>Our Historical Journey & Milestones</span>
                </h3>

                <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-cyan-500 before:to-slate-300">
                  {milestones.map((item, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-red-600 group-hover:bg-red-600 transition-colors -translate-x-1/2" />

                      <div className="text-xs font-mono font-bold text-cyan-700 tracking-wider uppercase mb-0.5">
                        {item.year}
                      </div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Nationwide Shipping Callout */}
            <AnimateOnScroll direction="up" delay={0.4}>
              <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-sm flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider">
                    Direct Carrier Freight Rates
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Nationwide Shipping on All Reconditioned Machinery
                  </div>
                  <div className="text-xs text-slate-500">
                    We negotiate volume rates with major freight carriers to save you thousands.
                  </div>
                </div>
                <a
                  href="#quote-form"
                  className="shrink-0 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow transition-colors"
                >
                  Freight Quote
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
