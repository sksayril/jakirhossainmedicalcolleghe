'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Quote, ChevronRight, Award, UserCheck, ArrowLeft } from 'lucide-react';
import { LEADERSHIP, SITE_INFO } from '@/data/siteData';

export default function LeaderMessagePage() {
  const params = useParams();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const slug = (params?.slug as string) || 'chairman';

  const leaderKey = slug.includes('chairman')
    ? 'chairman'
    : slug.includes('president')
    ? 'president'
    : slug.includes('principal')
    ? 'principal'
    : slug.includes('superintendent')
    ? 'superintendent'
    : 'chairman';

  const leader = LEADERSHIP[leaderKey];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title={`${leader.role}'s Message`}
        subtitle={`${leader.name} ${leader.qualifications ? `(${leader.qualifications})` : ''} - Jakir Hossain Medical College & Research Institute`}
        badge="Institutional Leadership"
        breadcrumbs={[
          { label: 'About JHMCRI', href: '/about' },
          { label: `${leader.role}'s Message` }
        ]}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Photo & Profile */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={leader.image || 'https://jhmcri.com/wp-content/uploads/2026/01/Indian-Doctors-Team-Ai-Generated-683x1024.png'}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">{leader.name}</h3>
              <p className="text-xs font-bold text-teal-700 uppercase tracking-wider">{leader.role}</p>
              {leader.qualifications && (
                <p className="text-xs text-slate-500 font-semibold mt-1">{leader.qualifications}</p>
              )}
              <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-100 text-[11px] text-teal-800 text-left w-full space-y-1">
                <span className="font-bold block">Institution:</span>
                <span>{SITE_INFO.name}</span>
              </div>
            </div>

            {/* Message Body */}
            <div className="md:col-span-8 space-y-6">
              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-100 text-teal-900 text-sm font-semibold italic leading-relaxed">
                <Quote className="w-6 h-6 text-teal-600 mb-1" />
                &ldquo;{leader.quote}&rdquo;
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                {leader.fullMessage.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-teal-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to About Overview</span>
                </Link>

                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
                >
                  Admission Enquiry 2026
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
