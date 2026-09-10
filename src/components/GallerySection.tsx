"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function GallerySection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Commercial Multi-Load Washer Bank",
      category: "laundromat",
      categoryLabel: "Vended Laundromat",
      image: "/images/gallery_washers.jpg",
      location: "Chicago, IL",
      specs: "High-extract soft-mount washers with cashless card integration",
    },
    {
      id: 2,
      title: "Industrial Laundry Finishing & Ironers",
      category: "industrial",
      categoryLabel: "Industrial Plant",
      image: "/images/gallery_finishing.jpg",
      location: "Milwaukee, WI",
      specs: "Automated high-speed flatwork ironer & linen folder line",
    },
    {
      id: 3,
      title: "Hotel & Resort On-Premise Laundry",
      category: "hospitality",
      categoryLabel: "Hospitality & Care",
      image: "/images/gallery_hospitality.jpg",
      location: "Lake Geneva, WI",
      specs: "Heavy-duty commercial dryers with automated moisture sensing",
    },
    {
      id: 4,
      title: "Factory Reconditioned Industrial Dryers",
      category: "reconditioned",
      categoryLabel: "Certified Rebuilt",
      image: "/images/gallery_dryers.jpg",
      location: "Nationwide Shipping Hub",
      specs: "Bench-tested, re-wired, and ready for freight dispatch",
    },
    {
      id: 5,
      title: "Turnkey Laundromat Facility Fitout",
      category: "laundromat",
      categoryLabel: "Vended Laundromat",
      image: "/images/install_5.jpg",
      location: "Rockford, IL",
      specs: "Full CAD design, utility drops, bulkheads, and machine commissioning",
    },
    {
      id: 6,
      title: "Industrial Rebuild & Service Showroom",
      category: "reconditioned",
      categoryLabel: "Haiges Huntley Facility",
      image: "/images/gallery_facility.jpg",
      location: "Huntley, IL HQ",
      specs: "Over 50+ commercial machines in stock and available for inspection",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <AnimateOnScroll direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-red-600" />
              <span>PROVEN MIDWEST INSTALLATIONS</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Our Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Gallery.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <p className="text-base text-slate-600 leading-relaxed">
              Take a look inside recent commercial laundry facilities engineered, installed, and powered by Haiges Machinery across the Midwest.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Filter Tabs */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Projects" },
              { id: "laundromat", label: "Laundromats" },
              { id: "industrial", label: "Industrial Plants" },
              { id: "hospitality", label: "Hospitality & Care" },
              { id: "reconditioned", label: "Rebuilt & Certified" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-600"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Project Grid with Staggered Scroll Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <AnimateOnScroll key={proj.id} direction="up" delay={idx * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-70" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                    {proj.categoryLabel}
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs font-mono text-cyan-300 font-bold">
                    📍 {proj.location}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {proj.specs}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Turnkey Commissioned
                    </span>
                    <a
                      href="#quote-form"
                      className="text-xs font-bold text-slate-700 hover:text-red-600 flex items-center gap-1 group/btn"
                    >
                      <span>Get Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Gallery Bottom CTA */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-3xl bg-white border border-slate-200 shadow-md">
              <span className="text-sm font-semibold text-slate-700">
                Want to see our equipment in person or schedule a showroom visit in Huntley, IL?
              </span>
              <a
                href="tel:8476693300"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all"
              >
                Call (847) 669-3300 to Book Visit
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
