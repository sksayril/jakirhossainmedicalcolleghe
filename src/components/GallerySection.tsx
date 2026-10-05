'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/siteData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Hospital', 'Academics', 'Laboratories', 'Community'];

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/80 text-teal-800 border border-teal-200">
            <Camera className="w-3.5 h-3.5 text-teal-600" />
            <span>Campus & Clinical Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Life at Jakir Hossain Medical College
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Take a visual tour through our 30-acre modern campus, multi-speciality hospital, lecture theatres, laboratories, and student hostels.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-105'
                  : 'glass-panel text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.title + idx}
              onClick={() => setSelectedImgIndex(idx)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 bg-white/90 shadow-md group cursor-pointer relative h-64"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-teal-800">
                  {img.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <p className="text-xs font-bold text-white leading-tight drop-shadow-md pr-2">
                  {img.title}
                </p>
                <div className="p-1.5 rounded-full bg-teal-500 text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && (
        <div
          onClick={() => setSelectedImgIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn"
        >
          <button
            onClick={() => setSelectedImgIndex(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[65vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <Image
              src={filteredImages[selectedImgIndex].src}
              alt={filteredImages[selectedImgIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">
                  {filteredImages[selectedImgIndex].category}
                </span>
                <h4 className="text-sm font-bold">{filteredImages[selectedImgIndex].title}</h4>
              </div>
              <span className="text-xs text-slate-400">
                {selectedImgIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
