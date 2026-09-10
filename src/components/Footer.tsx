"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#06090e] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Legacy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-64 mb-4">
              <Image
                src="/haiges-logo-white.png"
                alt="Haiges Machinery Inc Logo"
                fill
                sizes="260px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Family-owned commercial laundry equipment distributor serving Wisconsin, Illinois, and Indiana since 1967, backed by 5 generations of cleaning industry craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Factory Technicians • Genuine OEM Parts</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="#rebuilds" className="hover:text-red-400 transition-colors">
                  Reconditioned Units
                </a>
              </li>
              <li>
                <a href="#interactive-drum" className="hover:text-cyan-400 transition-colors">
                  3D Machinery Model
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">
                  Project Installations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-red-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-red-400 transition-colors">
                  Midwest Coverage
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About 5-Gen Legacy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operational Hours</h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Parts & Service Dept
                </div>
                <div className="text-slate-300 font-mono">Monday - Friday: 7:00 AM - 3:30 PM CST</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                <div className="font-bold text-red-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Equipment Sales Dept
                </div>
                <div className="text-slate-300 font-mono">Monday - Friday: 8:00 AM - 3:30 PM CST</div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Emergency (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Headquarters</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>11314 E. Main Street, Huntley, IL 60142</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:8005422828" className="hover:text-white font-mono font-bold">
                  (800) 542-2828 (Toll Free)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:8476693300" className="hover:text-white font-mono font-bold">
                  (847) 669-3300 (Huntley Local)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@haigesmachinery.com" className="hover:text-white">
                  info@haigesmachinery.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#quote-form"
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-red-600/20"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Distributed Brands Roster */}
        <div className="py-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-slate-300 font-bold uppercase tracking-wider">
            Premium Brands Distributed & Serviced:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span className="hover:text-white">Electrolux Professional</span>
            <span>•</span>
            <span className="hover:text-white">Wascomat</span>
            <span>•</span>
            <span className="hover:text-white">Forenta</span>
            <span>•</span>
            <span className="hover:text-white">Huebsch</span>
            <span>•</span>
            <span className="hover:text-white">UniMac</span>
            <span>•</span>
            <span className="hover:text-white">Speed Queen Commercial</span>
            <span>•</span>
            <span className="hover:text-white">Chicago Dryer</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved | Haiges Machinery, Inc. | Huntley, Illinois
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
