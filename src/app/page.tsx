'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MobileStoryHighlights from '@/components/MobileStoryHighlights';
import MobileAppNavBar from '@/components/MobileAppNavBar';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import LeadershipSection from '@/components/LeadershipSection';
import VirtualTourNavigator from '@/components/VirtualTourNavigator';
import HospitalHighlights from '@/components/HospitalHighlights';
import OpdAppointmentWidget from '@/components/OpdAppointmentWidget';
import SymptomChecker from '@/components/SymptomChecker';
import DepartmentExplorer from '@/components/DepartmentExplorer';
import NeetFeeCalculator from '@/components/NeetFeeCalculator';
import AdmissionsPreview from '@/components/AdmissionsPreview';
import MilestoneRoadmap from '@/components/MilestoneRoadmap';
import StudentStories from '@/components/StudentStories';
import GallerySection from '@/components/GallerySection';
import NoticeBoard from '@/components/NoticeBoard';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import SearchModal from '@/components/SearchModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white relative pb-16 xl:pb-0">
      {/* Top Glass Navigation Bar with Search & Ticker */}
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      {/* App-like Mobile Story Highlights Bar */}
      <MobileStoryHighlights />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenEnquiry={() => setEnquiryOpen(true)} />

        {/* 2. Key Stats Counter */}
        <StatsCounter />

        {/* 3. Leadership Guidance & Founder Messages */}
        <LeadershipSection />

        {/* 4. Interactive 360° Virtual Tour Navigator */}
        <VirtualTourNavigator />

        {/* 5. Hospital Clinical Care & Bed Matrix Preview */}
        <HospitalHighlights onOpenEnquiry={() => setEnquiryOpen(true)} />

        {/* 6. Live OPD Doctor Schedule & Appointment Token Booking */}
        <OpdAppointmentWidget />

        {/* 7. Smart Patient Symptom & Triage Department Navigator */}
        <SymptomChecker />

        {/* 8. Medical Departments & Labs Explorer */}
        <DepartmentExplorer />

        {/* 9. Interactive NEET-UG Score & Fee Calculator */}
        <NeetFeeCalculator onOpenEnquiry={() => setEnquiryOpen(true)} />

        {/* 10. Admissions Roadmap, Bank Details & Scholarships */}
        <AdmissionsPreview onOpenEnquiry={() => setEnquiryOpen(true)} />

        {/* 11. Institutional Journey & Milestone Roadmap */}
        <MilestoneRoadmap />

        {/* 12. Student Voices & White Coat Ceremony Reflections */}
        <StudentStories />

        {/* 13. Official Notice Board & Circulars */}
        <NoticeBoard />

        {/* 14. Campus & Clinical Tour Photo Gallery */}
        <GallerySection />

        {/* 15. FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      {/* Floating Emergency & Quick Enquiry for Desktop */}
      <div className="hidden xl:block">
        <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      </div>

      {/* App-Style Bottom Navigation for Mobile */}
      <MobileAppNavBar
        onOpenEnquiry={() => setEnquiryOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Admission Enquiry Modal */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
