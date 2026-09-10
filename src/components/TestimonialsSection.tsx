"use client";

import React from "react";
import { Star, Quote, ShieldCheck, ThumbsUp } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juliette Silver",
      title: "President",
      company: "Car Wash World",
      review:
        "Haiges is one of the most professional and competent companies we have ever worked with. Their knowledge and efficiency in fixing the service issue are incredible. Andy and staff are top notch. We have also used Haiges for several installations and we have never had a problem once.",
      highlight: "Never had a problem once across multiple installations",
      industry: "Commercial Wash Facility",
    },
    {
      name: "Ryan Magruder",
      title: "Operations Director",
      company: "Commercial Laundry Plant Project",
      review:
        "Just completed a year long project building a new commercial laundry plant. Matt, Jack, and Bryan were very helpful and great guys to work with. It was great partnering with them from CAD blueprints to final commissioning.",
      highlight: "Flawless execution on a year-long industrial buildout",
      industry: "Industrial Laundry Plant",
    },
    {
      name: "Cheryl Valdez",
      title: "Facility Manager",
      company: "Wheaton Franciscan Sisters",
      review:
        "The install of the Forenta press went very smoothly. Connor and his team should be commended on the job they did. They were great, knowledgeable, helpful and very polite. Every question I asked, they had an answer. These guys are truly exceptional!",
      highlight: "Truly exceptional installation and technician support",
      industry: "Healthcare & Care Facility",
    },
    {
      name: "Dennis Tretter",
      title: "Business Owner",
      company: "Midwest Coin & Commercial Laundry",
      review:
        "Best, most honest people I know for service and parts — excellent equipment refurbishers. They do what they say without question. They are my absolute go-to guys for all my reconditioned equipment.",
      highlight: "My go-to guys for all reconditioned equipment & OEM parts",
      industry: "Vended Laundromat",
    },
    {
      name: "Michael & Heidi Wiley",
      title: "Owners",
      company: "Village Clean",
      review:
        "Haiges has been a great partner for us since the beginning. They always assist with our needs, get answers to our questions, and provide both equipment and service whenever we needed it! Best service and install team in the business!",
      highlight: "Best service and install team in the business",
      industry: "Commercial Dry Cleaning",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <AnimateOnScroll direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>AUTHENTIC CLIENT ENDORSEMENTS</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Trusted by Commercial Operators <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Across the Midwest.
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <p className="text-base text-slate-600 leading-relaxed">
              Don't just take our word for it. Here is what hospital directors, plant operators, and laundromat owners say about partnering with Haiges Machinery.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Testimonials Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <AnimateOnScroll key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  {/* 5-Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300 group-hover:text-red-500 transition-colors" />
                  </div>

                  {/* Highlight Quote */}
                  <div className="text-xs font-mono font-bold text-cyan-700 mb-3 uppercase tracking-wider">
                    "{t.highlight}"
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                    "{t.review}"
                  </p>
                </div>

                {/* Author & Verification Footer */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <span title="Verified Customer">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.title}, <span className="text-slate-800 font-semibold">{t.company}</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono px-2 py-1 rounded bg-white text-slate-600 border border-slate-200 shadow-sm">
                    {t.industry}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Overall Trust Badge */}
        <AnimateOnScroll direction="up" delay={0.4}>
          <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-around gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500">Customer Satisfaction Rating</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-red-600">99.4%</div>
              <div className="text-xs text-slate-500">First-Time Fix Resolution Target</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-cyan-700">50 States</div>
              <div className="text-xs text-slate-500">Nationwide Rebuilt Equipment Freight</div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
