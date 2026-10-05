'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Contact Us & Campus Directions"
        subtitle="Get in touch with Jakir Hossain Medical College & Research Institute for Admissions, Hospital Care, Careers, or General Enquiries."
        badge="Direct Campus Access"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Campus Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {SITE_INFO.address}
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Phone & Helpline</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct Helpline: <a href={`tel:${SITE_INFO.phone}`} className="font-bold text-teal-700">{SITE_INFO.phone}</a><br />
              Alternate: {SITE_INFO.altPhone}
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Official Email</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              General: <a href={`mailto:${SITE_INFO.email}`} className="font-bold text-teal-700">{SITE_INFO.email}</a><br />
              Admissions: {SITE_INFO.admissionsEmail}
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Operating Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hospital Emergency: <strong>24 Hours Open</strong><br />
              Outpatient OPD: 9:00 AM - 4:00 PM<br />
              Admin Office: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form & Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-2xl font-bold text-slate-900">Send an Enquiry Message</h3>
              <p className="text-xs text-slate-500 mt-1">Our administrative desk will contact you via phone or email</p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Jakir Hossain Medical College & Research Institute. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-teal-600 text-white font-bold text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Ghosh"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Purpose of Contact</label>
                    <select className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-700">
                      <option>MBBS Admission 2026</option>
                      <option>Hospital OPD / IPD Enquiry</option>
                      <option>Doctor Consultation Appointment</option>
                      <option>Academic Verification</option>
                      <option>Career Opportunity</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your query or message in detail..."
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Response within 24 hours.</span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location Map & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-xl p-4 space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Campus Location in Murshidabad</span>
              </h4>

              {/* Map embed iframe */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Jakir Hossain Medical College Location Map"
                  src="https://maps.google.com/maps?q=Jakir%20Hossain%20Medical%20College%20Miapur%20Murshidabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 text-xs text-teal-950 space-y-1.5">
                <span className="font-bold block">How to Reach the Campus:</span>
                <p>• <strong>By Train:</strong> Nearest major railway stations are <strong>Jangipur Road (JRLE)</strong> and <strong>Raghunathganj</strong>, with regular direct trains connecting Kolkata (Sealdah / Howrah) and North Bengal.</p>
                <p>• <strong>By Road:</strong> Well connected via NH-12 (National Highway 12 / Old NH-34) with regular government and private bus services.</p>
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
