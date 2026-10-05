'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Sparkles, Star, ChevronLeft, ChevronRight, Award, GraduationCap } from 'lucide-react';

export default function StudentStories() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const stories = [
    {
      name: "Siddhartha Mukherjee",
      role: "MBBS Student (Batch 2024)",
      badge: "Clinical Experience",
      image: "https://jhmcri.com/wp-content/uploads/2026/01/pexels-photo-32213307-32213307-1024x683.jpg",
      quote: "The bedside teaching and direct patient interaction at JHMCRI teaching hospital give us immense confidence. The faculty professors guide us through every clinical case with personalized mentorship.",
      location: "Kolkata, West Bengal"
    },
    {
      name: "Ananya Banerjee",
      role: "MBBS Student (Batch 2025)",
      badge: "Hostel & Campus Life",
      image: "https://jhmcri.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-10.59.03-885x1024.jpeg",
      quote: "Hostel life is very secure and comfortable. Having 24/7 library access, nutritious multi-cuisine food, and green campus courtyards makes medical school enjoyable and balanced.",
      location: "Murshidabad, West Bengal"
    },
    {
      name: "Tanmay Roy",
      role: "MBBS Student (Batch 2024)",
      badge: "Dissection & Labs",
      image: "https://jhmcri.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-11.34.12-1024x682.jpeg",
      quote: "Our Anatomy Dissection Hall and Biochemistry labs are top-notch. The smart lecture theatres with digital AV systems make understanding complex medical physiology intuitive.",
      location: "Siliguri, West Bengal"
    }
  ];

  const current = stories[currentIdx];

  const nextStory = () => {
    setCurrentIdx((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span>Student Voices & Life at JHMCRI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hear from Future Doctors
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Real experiences from MBBS students studying, training, and residing at Jakir Hossain Medical College.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-teal-600/10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-3">{current.name}</h4>
                <p className="text-xs font-semibold text-teal-700">{current.role}</p>
                <span className="text-[11px] text-slate-400">{current.location}</span>
              </div>

              {/* Quote */}
              <div className="md:col-span-8 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                  {current.badge}
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Carousel Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    Story {currentIdx + 1} of {stories.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStory}
                      className="p-2 rounded-full bg-slate-100 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextStory}
                      className="p-2 rounded-full bg-slate-100 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
