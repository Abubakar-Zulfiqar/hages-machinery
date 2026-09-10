"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner - Credibility & Emergency Dispatch */}
      <div className="bg-slate-900 text-slate-200 py-1.5 px-4 sm:px-8 xl:px-12 text-xs font-medium">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 shrink-0 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block -ml-3" />
              Rapid Field Tech Dispatch Active
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Serving WI, IL, & IN • Nationwide Rebuilt Equipment Shipping</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Parts & Service: 7:00 AM - 3:30 PM CST
            </span>
            <a
              href="tel:8005422828"
              className="text-white hover:text-cyan-400 font-bold tracking-wider transition-colors whitespace-nowrap"
            >
              Toll-Free: (800) 542-2828
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp White Glass */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 xl:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo - Original High-Contrast for Light Mode */}
          <Link href="/" className="flex items-center shrink-0 group cursor-pointer select-none">
            <div className="relative h-11 w-48 sm:w-60 transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer">
              <Image
                src="/haiges-logo.png"
                alt="Haiges Machinery Inc. - Commercial Laundry Equipment"
                fill
                priority
                sizes="(max-width: 768px) 200px, 260px"
                className="object-contain object-left pointer-events-none select-none"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a
              href="#services"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              Services
            </a>
            <a
              href="#rebuilds"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              Reconditioned
            </a>
            <a
              href="#interactive-drum"
              className="hover:text-cyan-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 hover:after:w-full after:transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              3D Machine
            </a>
            <a
              href="#gallery"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              Installations
            </a>
            <a
              href="#testimonials"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              Reviews
            </a>
            <a
              href="#coverage"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              Coverage
            </a>
            <a
              href="#about"
              className="hover:text-red-600 transition-colors py-1 whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
            >
              About
            </a>
          </div>

          {/* Desktop Right CTAs: Clean Light Mode (h-11) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Click-to-call button */}
            <a
              href="tel:8476693300"
              className="h-11 flex items-center gap-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200/90 hover:border-red-500/50 transition-all shadow-sm group shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center animate-rocking group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold leading-none">
                  Call Dispatch
                </div>
                <div className="text-sm font-black text-slate-900 tracking-wide leading-tight mt-0.5 whitespace-nowrap">
                  (847) 669-3300
                </div>
              </div>
            </a>

            {/* Quote Button */}
            <a
              href="#quote-form"
              className="h-11 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-md shadow-red-600/25 transition-all active:scale-95 flex items-center gap-2 shrink-0 whitespace-nowrap group"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shrink-0 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 mt-2 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                Services
              </a>
              <a
                href="#rebuilds"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                Reconditioned Equipment
              </a>
              <a
                href="#interactive-drum"
                onClick={() => setMobileMenuOpen(false)}
                className="text-cyan-600 py-1 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                3D Machine Model
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                Installations & Gallery
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                Reviews
              </a>
              <a
                href="#coverage"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                Midwest Coverage
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-600 py-1"
              >
                About 5-Gen Legacy
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="tel:8476693300"
                className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 text-slate-900 font-bold border border-slate-200"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call (847) 669-3300</span>
              </a>
              <a
                href="#quote-form"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 h-12 rounded-xl bg-red-600 text-white font-bold shadow-lg shadow-red-600/30"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
