"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CoverageMapSection() {
  const [activeTab, setActiveTab] = useState<"IL" | "WI" | "IN" | "US">("IL");

  const territories = {
    IL: {
      name: "Illinois (Headquarters & Showroom)",
      dispatchTime: "Same-Day / 24-Hour Dispatch",
      cities: [
        "Huntley HQ & Showroom",
        "Greater Chicago Metro Area",
        "Rockford & Belvidere",
        "Naperville, Aurora & Elgin",
        "Peoria & Bloomington",
        "Quad Cities Regional Hub",
      ],
      description: "Our main headquarters, reconditioning shop, and 50,000+ OEM parts warehouse are located right here in Huntley, IL.",
    },
    WI: {
      name: "Wisconsin Regional Territory",
      dispatchTime: "24 to 48-Hour Field Service",
      cities: [
        "Milwaukee Metro & Suburbs",
        "Kenosha & Racine Corridor",
        "Madison & Dane County",
        "Green Bay & Appleton",
        "Oshkosh & Fond du Lac",
        "Lake Geneva & Walworth",
      ],
      description: "Dedicated field technicians serving southeastern, central, and fox valley commercial laundries with fully equipped mobile units.",
    },
    IN: {
      name: "Indiana Service Territory",
      dispatchTime: "24 to 48-Hour Field Service",
      cities: [
        "Greater Indianapolis Metro",
        "Gary, Hammond & Lake County",
        "South Bend & Mishawaka",
        "Fort Wayne Regional",
        "Lafayette & Tippecanoe",
        "Elkhart Manufacturing Hub",
      ],
      description: "Full service route covering northern and central Indiana for dry-cleaners, industrial plants, and healthcare facilities.",
    },
    US: {
      name: "Nationwide Freight Shipping (All 50 States)",
      dispatchTime: "Immediate Carrier Booking",
      cities: [
        "Coast-to-Coast LTL Freight",
        "Liftgate & Dock Delivery Options",
        "Export-Grade Wood Crating",
        "Direct Carrier Volume Discounts",
        "Tracking & Insurance Included",
        "Reconditioned Washers & Dryers",
      ],
      description: "Because we work directly with all major national freight carriers, we negotiate the best volume rates and pass those savings directly to you.",
    },
  };

  const current = territories[activeTab];

  return (
    <section id="coverage" className="relative py-24 bg-white overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <AnimateOnScroll direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
              <MapPin className="w-3.5 h-3.5" />
              <span>PRIMARY MIDWEST SERVICE HUBS</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Service Coverage & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
                Huntley, IL Headquarters.
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <p className="text-base text-slate-600 leading-relaxed">
              Direct certified service technicians across Wisconsin, Illinois, and Indiana — plus nationwide freight on reconditioned machinery.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Coverage Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <AnimateOnScroll direction="right" delay={0.2}>
              <div>
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Select Operating Territory:
                </div>

                {/* Territory Selector Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {(["IL", "WI", "IN", "US"] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setActiveTab(code)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeTab === code
                          ? "bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-600"
                          : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-sm"
                      }`}
                    >
                      {code === "US" ? "Nationwide" : code}
                    </button>
                  ))}
                </div>

                {/* Territory Details Box */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{current.name}</h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{current.dispatchTime}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.description}
                  </p>

                  {/* City list */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Key Dispatch & Delivery Hubs:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.cities.map((city, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact info */}
              <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>11314 E. Main Street, Huntley, IL 60142</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Parts & Service: Mon-Fri 7:00 AM - 3:30 PM CST</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Toll-Free: (800) 542-2828 • Local: (847) 669-3300</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Embedded Natural Clean Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl relative min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.142212711824!2d-88.4175398!3d42.1686395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f146ba752f741%3A0x3780dd2f629e0397!2sHaiges%20Machinery%20Inc!5e0!3m2!1sen!2sph!4v1750096372535!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haiges Machinery Inc. Headquarters on Google Maps"
              className="w-full h-full"
            />

            {/* Float badge over map */}
            <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg max-w-xs pointer-events-none">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Haiges Machinery, Inc.</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                11314 E. Main St, Huntley, IL 60142
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
