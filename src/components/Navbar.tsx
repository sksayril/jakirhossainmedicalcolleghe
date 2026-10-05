'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Building2,
  Stethoscope,
  BookOpen,
  FileCheck,
  Shield,
  HeartPulse,
  Award,
  Sparkles,
  Search
} from 'lucide-react';
import { SITE_INFO, NOTICES } from '@/data/siteData';
import SearchModal from '@/components/SearchModal';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About JHMCRI',
      href: '/about',
      dropdown: [
        { name: 'About the College & Trust', href: '/about', desc: 'History, Vision, Mission & Shibham Trust' },
        { name: "Chairman's Message", href: '/about/chairman', desc: 'Message from Mr. Jakir Hossain' },
        { name: "President's Message", href: '/about/president', desc: 'Message from Dr. Dipak Kumar Das' },
        { name: "Dean & Principal's Message", href: '/about/principal', desc: 'Prof. (Dr.) Nirjhar Bhattacharya' },
        { name: "Medical Superintendent's Message", href: '/about/superintendent', desc: 'Prof. (Dr.) Naresh S. Gurbani' },
        { name: 'Governance & Committees', href: '/about/committees', desc: 'Anti-Ragging, ICC, Ethics, Curriculum' },
        { name: 'Govt. Approvals & Affiliation', href: '/about/approvals', desc: 'NMC LOP, WBUHS & Govt of WB PPP' }
      ]
    },
    {
      name: 'Hospital & Services',
      href: '/hospital',
      dropdown: [
        { name: 'Hospital Overview & Facilities', href: '/hospital', desc: '350+ Beds, ICUs, Modular OTs & Labs' },
        { name: 'Clinical Material & Statistics', href: '/hospital/clinical-material', desc: 'OPD/IPD Stats, Surgeries & Tests' },
        { name: 'Bed Distribution Matrix', href: '/hospital/bed-distribution', desc: 'Ward-wise & ICU Bed Breakdown' },
        { name: 'Healthcare Training (RHTC & UHTC)', href: '/hospital/health-care-facility', desc: 'Rural & Urban Community Centers' },
        { name: 'Grievance Redressal Cell', href: '/hospital/grievance-cell', desc: 'Transparent Patient & Student Care' }
      ]
    },
    {
      name: 'Departments',
      href: '/departments',
      dropdown: [
        { name: 'All Departments Overview', href: '/departments', desc: '21+ Pre, Para & Clinical Wings' },
        { name: 'Pre-Clinical (Anatomy, Physio, Bio)', href: '/departments?cat=Pre-Clinical', desc: '1st Professional Foundation' },
        { name: 'Para-Clinical (Patho, Micro, Pharm, FMT, PSM)', href: '/departments?cat=Para-Clinical', desc: '2nd Professional Diagnostics' },
        { name: 'Clinical (Med, Surg, OBG, Pedia, Ortho, etc.)', href: '/departments?cat=Clinical', desc: '3rd & Final Professional Specialities' },
        { name: 'Our Doctors & Faculty Directory', href: '/faculty', desc: 'Full Roster of Medical Educators' }
      ]
    },
    {
      name: 'Admissions 2026',
      href: '/admissions',
      dropdown: [
        { name: 'MBBS Admission 2026 Process', href: '/admissions', desc: 'NEET-UG, WBMCC Counseling & Eligibility' },
        { name: 'Fee Structure (2026-2027)', href: '/admissions/fee-structure', desc: 'Official Proposed MBBS Fee Chart' },
        { name: 'Official Bank Payment Details', href: '/admissions/bank-details', desc: 'RTGS / NEFT / IMPS Instructions' },
        { name: 'Scholarships & Education Loans', href: '/admissions/scholarships', desc: 'SVMCM, Aikyashree, Oasis & WBSCC' }
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Academics & CBME Curriculum', href: '/academics', desc: 'NMC & WBUHS Learning Framework' },
        { name: '1st & 2nd Year MBBS Syllabus', href: '/academics/syllabus', desc: 'Subject-wise Detailed Curriculum' },
        { name: 'Academic Calendar & Exams', href: '/academics/calendar', desc: 'Semesters, Terminals & Professional Dates' },
        { name: 'Central & Digital Library', href: '/academics/library', desc: 'Medical Books, Journals & e-Resources' },
        { name: 'Holiday List 2026', href: '/academics/holidays', desc: 'Official Annual Academic Recess' }
      ]
    },
    {
      name: 'Campus Life',
      href: '/campus-life',
      dropdown: [
        { name: 'Hostel & Residential Facilities', href: '/campus-life', desc: 'Boys & Girls Hostels, Mess & Gym' },
        { name: 'Careers & Faculty Recruitment', href: '/career', desc: 'Current Vacancies for Doctors & Staff' },
        { name: 'Photo & Campus Gallery', href: '/gallery', desc: 'Hospital, Labs, Dissection & Events' },
        { name: 'College Blog & Health Articles', href: '/blog', desc: 'Latest News & Medical Awareness' }
      ]
    },
    { name: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Urgent Notification Ticker & Contact Strip */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 text-white text-[11px] md:text-xs py-1.5 px-4 border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Live Notice Marquee */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wide shrink-0 border border-amber-500/40 animate-pulse">
              <Sparkles className="w-3 h-3" />
              LATEST UPDATE
            </span>
            <div className="truncate text-slate-200">
              <Link href="/admissions" className="hover:text-teal-300 transition-colors">
                {NOTICES[0].title}
              </Link>
            </div>
          </div>

          {/* Quick Contact & Credentials */}
          <div className="hidden lg:flex items-center gap-5 shrink-0 text-slate-300">
            <a href={`tel:${SITE_INFO.phone}`} className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{SITE_INFO.phone}</span>
            </a>
            <a href={`mailto:${SITE_INFO.email}`} className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>{SITE_INFO.email}</span>
            </a>
            <span className="text-teal-400/80 font-medium">|</span>
            <span className="text-amber-300/90 font-medium">Under PPP Mode with Govt. of West Bengal</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-lg shadow-teal-950/5 py-2.5'
            : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* College Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 md:h-14 w-auto aspect-[312/67] max-w-[240px] md:max-w-[300px]">
              <Image
                src={SITE_INFO.logo}
                alt={SITE_INFO.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 240px, 300px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Glass Dropdowns */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'text-teal-700 bg-teal-50/80'
                          : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/60'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all block ${
                        isActive
                          ? 'text-teal-700 bg-teal-50/80'
                          : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/60'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasDropdown && item.dropdown && (
                    <div
                      className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="glass-dropdown rounded-2xl p-2 shadow-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-2.5 rounded-xl hover:bg-teal-50/90 transition-all group/sub"
                          >
                            <div className="text-xs font-bold text-slate-800 group-hover/sub:text-teal-700">
                              {sub.name}
                            </div>
                            {sub.desc && (
                              <div className="text-[11px] text-slate-500 group-hover/sub:text-slate-600 line-clamp-1 mt-0.5">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer border border-slate-200/80"
              title="Search website (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-teal-600" />
              <span className="hidden lg:inline text-[11px] text-slate-400 font-mono">⌘K</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-md shadow-teal-600/20 hover:shadow-lg transition-all cursor-pointer"
            >
              Enquire Now
            </button>
            <Link
              href="/admissions"
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg transition-all"
            >
              MBBS 2026
            </Link>
          </div>

          {/* Mobile Search & Menu Toggle Buttons */}
          <div className="flex items-center gap-1 xl:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-teal-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <div key={item.name} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180 text-teal-600' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-3 border-l-2 border-teal-500 space-y-1 my-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-xs text-slate-600 hover:text-teal-700"
                            >
                              <span className="font-semibold block">{sub.name}</span>
                              {sub.desc && <span className="text-[10px] text-slate-400">{sub.desc}</span>}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-bold text-slate-800 hover:text-teal-700"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md"
                >
                  Admission Enquiry Form
                </button>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {SITE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
