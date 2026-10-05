'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { HeartPulse, MapPin, Users, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HealthCareFacilityPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Rural & Urban Health Training Centres"
        subtitle="RHTC and UHTC community training centers delivering preventive, maternal, and pediatric health services in Murshidabad."
        badge="Community Outreach"
        breadcrumbs={[
          { label: 'Hospital', href: '/hospital' },
          { label: 'Healthcare Training Facilities' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RHTC */}
          <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl flex flex-col justify-between">
            <div className="relative h-64 w-full">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/RULAR-HEALTH-TRAINING-CENTRES-RHTC-1024x683.jpg"
                alt="Rural Health Training Centre"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-600 text-white">
                  RHTC Centre
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Rural Health Training Centre (RHTC)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located in the rural periphery of Raghunathganj, the RHTC provides comprehensive primary healthcare, immunization, antenatal checkups, and nutritional counseling while offering medical interns and MBBS students rural postings.
              </p>
              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Daily General OPD & First Aid Triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Maternal & Child Health (MCH) clinic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>National Health Programme Implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* UHTC */}
          <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl flex flex-col justify-between">
            <div className="relative h-64 w-full">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/Health-Care-Facility-1-300x200.jpg"
                alt="Urban Health Training Centre"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  UHTC Centre
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Urban Health Training Centre (UHTC)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The UHTC caters to urban slum populations and peri-urban communities, conducting health surveys, geriatric screening camps, vector-borne disease prevention, and non-communicable disease (NCD) surveillance.
              </p>
              <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Diabetes & Hypertension Screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Free Diagnostic Testing & Essential Medicines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Adolescent & School Health Initiatives</span>
                </div>
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
