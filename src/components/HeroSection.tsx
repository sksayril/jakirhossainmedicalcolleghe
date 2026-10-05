'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Award,
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { HERO_SLIDES, SITE_INFO } from '@/data/siteData';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950">
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-7000 ease-out`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-layered Glassmorphic Dark & Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Main Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Institutional Trust Badges */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 bg-slate-900/90 border border-amber-400/40 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                {HERO_SLIDES[currentSlide].badge}
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-slate-900/90 border border-emerald-400/40 hidden sm:flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Under PPP Mode with Govt. of WB
              </span>
            </div>

            {/* Dynamic Slide Title */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-teal-400">
                {HERO_SLIDES[currentSlide].subtitle}
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {HERO_SLIDES[currentSlide].desc}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm shadow-xl shadow-teal-500/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Apply for Admission 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href={HERO_SLIDES[currentSlide].ctaLink}
                className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 shadow-md"
              >
                <span>{HERO_SLIDES[currentSlide].ctaText}</span>
              </Link>
            </div>

            {/* Key Quick Bullet Points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-200 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400" />
                <span className="font-semibold">NMC Approved (MARB)</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">WBUHS Affiliated</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">24/7 Helpline: {SITE_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating High-Contrast Glass Summary Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="p-6 rounded-3xl border border-slate-700/80 bg-slate-950/90 shadow-2xl backdrop-blur-2xl text-white space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-extrabold block">
                    QUICK ADMISSION GUIDE
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">MBBS Batch 2026-27</h3>
                </div>
                <div className="p-3 bg-teal-500/20 rounded-2xl text-teal-300 border border-teal-500/40">
                  <GraduationCap className="w-7 h-7" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-slate-800 flex items-center justify-between shadow-inner">
                  <span className="text-slate-200 font-bold text-xs">Annual Approved Intake</span>
                  <span className="font-black text-teal-300 text-sm">100 / 150 Seats</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-slate-800 flex items-center justify-between shadow-inner">
                  <span className="text-slate-200 font-bold text-xs">Admission Process</span>
                  <span className="font-black text-amber-300 text-sm">NEET-UG & WBMCC</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-slate-800 flex items-center justify-between shadow-inner">
                  <span className="text-slate-200 font-bold text-xs">Hospital Bed Capacity</span>
                  <span className="font-black text-emerald-300 text-sm">350+ Beds Multi-Speciality</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-slate-800 flex items-center justify-between shadow-inner">
                  <span className="text-slate-200 font-bold text-xs">Govt. Partnership</span>
                  <span className="font-black text-cyan-300 text-sm">PPP Mode (Govt. of WB)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/30 transition-all cursor-pointer hover:scale-[1.02]"
                >
                  Request Counselling Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows & Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full glass-panel hover:bg-white/20 text-white transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-teal-400' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full glass-panel hover:bg-white/20 text-white transition-all cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
