"use client";

import React from "react";
import { 
  Compass, 
  Layers, 
  Coins, 
  Wrench, 
  Cpu, 
  FlaskConical, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ServicesSection() {
  const services = [
    {
      id: "design",
      icon: Compass,
      title: "Laundry Facility Design",
      tagline: "Custom CAD Layouts & Workflow Engineering",
      desc: "Turnkey architectural blueprints, utility sizing (water, gas, electrical, exhaust), and ergonomic equipment layouts to eliminate bottlenecks and minimize utility overhead.",
      specs: ["3D CAD Layouts", "Utility Load Calculations", "Workflow Optimization", "Code Compliance"],
      iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accent: "text-cyan-700",
    },
    {
      id: "equipment",
      icon: Layers,
      title: "Commercial-Industrial Equipment",
      tagline: "New & Heavy-Duty Machines",
      desc: "Distributor of the world's most trusted brands: high-G extract washers, multi-stage tumble dryers, flatwork ironers, folders, dry-cleaning presses, and steam boilers.",
      specs: ["High-G Extract Washers", "Multi-Load Dryers", "Ironers & Folders", "Steam Boilers & Vacuums"],
      iconBg: "bg-red-50 text-red-600 border-red-200",
      accent: "text-red-600",
    },
    {
      id: "laundromat",
      icon: Coins,
      title: "Laundromat Development",
      tagline: "Turnkey Vended Store Architecture",
      desc: "Comprehensive business development for coin/card laundromats: site selection consultation, revenue modeling, cashless payment integration, and full equipment fit-out.",
      specs: ["Location Feasibility", "Cashless/Card Systems", "Store Demographics", "Full Buildout Packages"],
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "text-amber-700",
    },
    {
      id: "repairs",
      icon: Wrench,
      title: "Service & Rapid Repairs",
      tagline: "Certified Field Engineers on Wheels",
      desc: "Factory-trained technicians dispatched throughout Illinois, Wisconsin, and Indiana. We diagnose electrical, mechanical, and steam issues with fully stocked service trucks.",
      specs: ["Emergency Tech Dispatch", "Preventive Maintenance", "Bearing & Motor Overhauls", "Gas & Steam Diagnostics"],
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "text-emerald-700",
    },
    {
      id: "parts",
      icon: Cpu,
      title: "OEM Spare Parts Warehouse",
      tagline: "Genuine Factory Components",
      desc: "Extensive regional parts inventory ensuring you never wait weeks for critical components. If we don't have it on our shelves in Huntley, IL, we expedite it immediately.",
      specs: ["Massive In-Stock Inventory", "Same-Day Dispatch", "OEM Guaranteed Fit", "Belts, Valves, Inverters & Motors"],
      iconBg: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "text-purple-700",
    },
    {
      id: "chemicals",
      icon: FlaskConical,
      title: "Laundry & Housekeeping Chemicals",
      tagline: "Precision Automated Dispensing",
      desc: "Commercial chemical formulations designed for superior soil removal, linen longevity, and low-temperature energy savings, paired with automatic precision pump systems.",
      specs: ["Automated Injection Pumps", "Eco-Friendly Detergents", "Hospital-Grade Sanitizers", "Neutralizers & Softeners"],
      iconBg: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "text-blue-700",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <AnimateOnScroll direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>FULL SPECTRUM COMMERCIAL CAPABILITIES</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From single-machine replacement to multimillion-dollar industrial plant fitouts, Haiges Machinery delivers end-to-end expertise backed by 5 generations of customer commitment.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 6 Grid Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <AnimateOnScroll key={svc.id} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    {/* Service Icon & Action Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3.5 rounded-2xl border ${svc.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <a
                        href="#quote-form"
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-400 group-hover:text-white group-hover:bg-red-600 transition-all border border-slate-200/70"
                        title={`Request Quote for ${svc.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                      {svc.title}
                    </h3>
                    <div className={`text-xs font-mono font-bold mb-3 ${svc.accent}`}>
                      {svc.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>

                  <div>
                    {/* Key Specifications list */}
                    <div className="pt-4 border-t border-slate-100 space-y-2 mb-6">
                      {svc.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Direct Quote CTA */}
                    <a
                      href="#quote-form"
                      className="w-full py-2.5 rounded-xl bg-slate-50 group-hover:bg-red-600 text-slate-800 group-hover:text-white text-xs font-bold border border-slate-200/80 group-hover:border-red-500 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request Service Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom Banner for Immediate Dispatch */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">Need Emergency Service on Your Commercial Equipment?</div>
                <div className="text-xs text-slate-500">Our certified service technicians are stationed across WI, IL, and IN for fast dispatch.</div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:8476693300"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-md shadow-red-600/25 transition-all text-center"
              >
                Call (847) 669-3300
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
