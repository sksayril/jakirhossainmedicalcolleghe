'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import DepartmentExplorer from '@/components/DepartmentExplorer';

export default function DepartmentsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Academic & Clinical Departments"
        subtitle="21+ Pre-Clinical, Para-Clinical, and Clinical departments equipped with advanced medical diagnostic facilities, lecture theatres, and dedicated laboratories."
        badge="NMC Curricular Departments"
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <main className="flex-1">
        <DepartmentExplorer />
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
