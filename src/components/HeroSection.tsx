"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, ShieldCheck, Wrench, Sparkles, ArrowRight, Truck, Award, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import SuccessModal from "./SuccessModal";
import AnimateOnScroll from "./AnimateOnScroll";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    helpText: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#eb222a", "#0284c7", "#0f172a"],
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(true);
    }, 500);
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80">
      {/* Light subtle grid texture */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none opacity-60" />

      {/* Atmospheric ambient soft glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & High-Trust Copy */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateOnScroll direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-slate-700 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-red-700 font-extrabold uppercase tracking-wider">Midwest's Trusted Leader</span>
                <span className="text-slate-400">•</span>
                <span>5 Generations Since 1967</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
                No-Stress <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-500">Laundry Solutions.</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
                  Built for High Performance & Zero Downtime.
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Premium commercial & industrial laundry equipment distributor serving 
                <span className="text-slate-900 font-bold"> Wisconsin, Illinois, & Indiana</span>. 
                Specializing in full facility CAD design, new & rebuilt equipment sales, certified local maintenance, 
                and <span className="text-cyan-600 font-bold">nationwide freight</span> on reconditioned machinery.
              </p>
            </AnimateOnScroll>

            {/* 4 Core Value Props from Original Funnel */}
            <AnimateOnScroll direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Family Owned & Operated</div>
                    <div className="text-xs text-slate-500">5-generation cleaning industry heritage</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-100">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">We "SERVICE" Our Customers</div>
                    <div className="text-xs text-slate-500">Rapid dispatch factory certified technicians</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Highly Trained Local Service</div>
                    <div className="text-xs text-slate-500">Trucks stocked with genuine OEM spare parts</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Premium Lines & Chemicals</div>
                    <div className="text-xs text-slate-500">New & rebuilt equipment with nationwide freight</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Quick Contact & Dispatch CTA */}
            <AnimateOnScroll direction="up" delay={0.5}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:8476693300"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-red-500/50 transition-all text-slate-900 shadow-sm hover:shadow group"
                >
                  <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center animate-rocking">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Direct Field Dispatch</div>
                    <div className="text-base font-black text-slate-900 tracking-wide">(847) 669-3300</div>
                  </div>
                </a>

                <a
                  href="#interactive-drum"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-sm font-bold border border-slate-200 transition-colors"
                >
                  <Zap className="w-4 h-4 text-cyan-600" />
                  <span>Inspect 3D Drum</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: High-Converting Light Mode Quote Form */}
          <div className="lg:col-span-5">
            <AnimateOnScroll direction="left" delay={0.3}>
              <div
                id="quote-form"
                className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl shadow-slate-300/60"
              >
                {/* Form Header */}
                <div className="text-center mb-6">
                  <div className="inline-block p-2 rounded-xl bg-red-50 text-red-600 mb-2 border border-red-100">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Stress-Free Laundry Solutions
                  </h3>
                  <p className="text-sm font-bold text-red-600 mt-0.5">
                    Get A Free Commercial Quote Today!
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Fast response within 15 minutes during business hours.
                  </p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 1. Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Facility Director"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(847) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* 3. Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@hospitalitygroup.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* 4. Zip Code */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Facility Zip Code <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={10}
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      placeholder="e.g. 60142 (Huntley / Chicago / WI / IN)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all"
                    />
                  </div>

                  {/* 5. How can we help you? */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      How Can We Help You? <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.helpText}
                      onChange={(e) => setFormData({ ...formData, helpText: e.target.value })}
                      placeholder="Tell us what equipment, service repairs, laundromat setup, or parts you need..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-500/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-[0.99] text-white font-black text-base tracking-wide shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <span>Get A Quote</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Confidential • No Spam Guarantee • Family Operated</span>
                  </div>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadName={formData.name}
      />
    </section>
  );
}
