"use client";

import React from "react";
import { History, Calendar, CheckCircle, Truck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function StatsCounter() {
  const stats = [
    {
      icon: History,
      value: "5",
      unit: "Generations",
      label: "Family Cleaning Legacy",
      detail: "Rooted in dye shops & dry cleaning since the late 1800s",
      iconBg: "bg-red-50 text-red-600 border-red-100",
      accent: "text-red-600",
    },
    {
      icon: Calendar,
      value: "1967",
      unit: "Est.",
      label: "Midwest Industry Leader",
      detail: "Over 57 years of dedicated equipment engineering",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      accent: "text-cyan-600",
    },
    {
      icon: CheckCircle,
      value: "10,000+",
      unit: "Units",
      label: "Machines Deployed & Serviced",
      detail: "From turnkey laundromats to mega hospital laundries",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "text-emerald-600",
    },
    {
      icon: Truck,
      value: "50",
      unit: "States",
      label: "Nationwide Freight Shipping",
      detail: "Direct carrier negotiated rates on all rebuilt equipment",
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
      accent: "text-amber-600",
    },
  ];

  return (
    <section className="relative py-12 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <AnimateOnScroll key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${stat.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                      Benchmark #{i + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${stat.accent}`}>
                      {stat.unit}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800 mb-1">{stat.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{stat.detail}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
