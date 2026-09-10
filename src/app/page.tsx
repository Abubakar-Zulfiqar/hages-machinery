import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import Interactive3DSection from "@/components/Interactive3DSection";
import ServicesSection from "@/components/ServicesSection";
import RebuildShowcase from "@/components/RebuildShowcase";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoverageMapSection from "@/components/CoverageMapSection";
import AboutSection from "@/components/AboutSection";
import FloatingCallBar from "@/components/FloatingCallBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      {/* Lenis Smooth Scroll Engine */}
      <SmoothScroll />

      {/* 1. Glassmorphism Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section with 5-Field Quote Form & Value Pillars */}
      <HeroSection />

      {/* 3. Industry Stats & Legacy Ticker */}
      <StatsCounter />

      {/* 4. 3D Interactive Machinery Drum Engineering Showcase */}
      <Interactive3DSection />

      {/* 5. Comprehensive 6-Service Capabilities Grid */}
      <ServicesSection />

      {/* 6. Factory Rebuild Craftsmanship (Interactive Before/After Slider) */}
      <RebuildShowcase />

      {/* 7. Authentic Project Installation Gallery */}
      <GallerySection />

      {/* 8. Midwest Client Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 9. 5-Generation Family Heritage Timeline */}
      <AboutSection />

      {/* 10. Service Coverage & Interactive Google Facility Map */}
      <CoverageMapSection />

      {/* 11. Sticky Emergency Dispatch Floating Bar */}
      <FloatingCallBar />

      {/* 12. Industrial Footer */}
      <Footer />
    </main>
  );
}

