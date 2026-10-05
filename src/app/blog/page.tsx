'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Calendar, User, ArrowRight, Tag, Sparkles } from 'lucide-react';

export default function BlogPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const blogPosts = [
    {
      id: "b1",
      title: "Essential Tips for NEET-UG 2026 Aspirants: Cracking Medical Entrance & Counseling",
      date: "September 2026",
      category: "Admissions & Counseling",
      author: "JHMCRI Academic Cell",
      image: "https://jhmcri.com/wp-content/uploads/2026/01/pexels-photo-32213307-32213307-1024x683.jpg",
      excerpt: "A comprehensive roadmap explaining physics-chemistry-biology revision strategies, WBMCC state quota choices, and document verification readiness for prospective MBBS scholars."
    },
    {
      id: "b2",
      title: "Understanding Competency-Based Medical Education (CBME): A Student Perspective",
      date: "August 2026",
      category: "Medical Pedagogy",
      author: "Prof. Dr. S. K. Roy",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg",
      excerpt: "How the NMC CBME framework prioritizes clinical case encounters, early patient contact, communication ethics (AETCOM), and skill lab simulations over pure rote memorization."
    },
    {
      id: "b3",
      title: "Rural Health Awareness & Vector-Borne Disease Prevention in Murshidabad",
      date: "July 2026",
      category: "Public Health",
      author: "Dept. of Community Medicine",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/RULAR-HEALTH-TRAINING-CENTRES-RHTC-1024x683.jpg",
      excerpt: "Highlights from our recent health screening and mosquito control awareness drive across Jangipur and Raghunathganj rural villages conducted by medical interns."
    },
    {
      id: "b4",
      title: "Modern Modular Operation Theatres: Ensuring Zero Infection Rates in Surgical Care",
      date: "June 2026",
      category: "Clinical Innovations",
      author: "Dept. of General Surgery",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg",
      excerpt: "Exploring laminar airflow ventilation, HEPA air filtration systems, and strict sterilization protocols implemented across JHMCRI surgical suites."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="College Blog & Health Awareness"
        subtitle="Insights on medical education, clinical case discussions, health advisories, and campus life at Jakir Hossain Medical College."
        badge="News & Publications"
        breadcrumbs={[{ label: 'Blog & Articles' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-lg flex flex-col group"
            >
              <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-600/90 text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-teal-600" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => alert(`Opening article: ${post.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
