"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function StudentsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="p-4 md:p-10 lg:pt-10 flex-1 pb-[120px] md:pb-10 max-w-[1400px] mx-auto w-full">
      {/* Desktop Page Title */}
      <div className="hidden md:flex justify-between items-end mb-8">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">My Students</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your active mentoring relationships.</p>
        </div>
      </div>

      {/* Stats Summary Grid (Bento style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Stat Card 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="p-3 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">school</span>
            </span>
          </div>
          <div className="relative z-10">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Students</p>
            <p className="font-stat-display text-stat-display text-on-surface text-4xl">24</p>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="p-3 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">bolt</span>
            </span>
            <span className="font-label-caps text-label-caps text-tertiary bg-tertiary-container/20 px-3 py-1 rounded-full">+2 this week</span>
          </div>
          <div className="relative z-10">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Active This Week</p>
            <p className="font-stat-display text-stat-display text-on-surface text-4xl">8</p>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="p-3 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">person_add</span>
            </span>
          </div>
          <div className="relative z-10">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">New Requests</p>
            <p className="font-stat-display text-stat-display text-on-surface text-4xl">3</p>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
        {/* Mobile Search (Visible only on mobile) */}
        <div className="md:hidden w-full relative items-center flex">
          <span className="material-symbols-outlined absolute left-4 text-outline-variant">search</span>
          <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search students..." type="text"/>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {['All', 'UX Design', 'Python', 'Data Science'].map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-colors shadow-sm ${
                activeFilter === filter 
                ? 'bg-primary text-on-primary hover:opacity-90' 
                : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Sort/View Options */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <span className="font-body-sm text-body-sm text-on-surface-variant mr-2">Sort by:</span>
          <select className="bg-surface-container-lowest border border-outline-variant/50 rounded-full px-4 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none pr-8 relative cursor-pointer outline-none">
            <option>Recent Activity</option>
            <option>Name (A-Z)</option>
            <option>Progress (High-Low)</option>
          </select>
        </div>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Card 1 */}
        <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-shadow duration-300 flex flex-col relative group">
          <div className="absolute top-4 right-4">
            <span className="bg-tertiary-container/20 text-tertiary-container font-label-caps text-label-caps px-3 py-1 rounded-full border border-tertiary-container/30">
              Advanced UX
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-container-highest relative flex-shrink-0">
              <img alt="Sophea N." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEt5u02dwO7MONvo_gmDW0jANLrIGU0qDEVkkFA1uYJm0ImpeHea28xyRmlRcBfkp7AN4NTLw6i7lX20oPlhZL31DvPfADHibza46sWSKlTfYaP1LPXMBPOpYIE0tU6YgjvU70MWjig8RSo4WSbvbUxijj_e_MEhRF052ShzY4fz-wDxKXECNNqVz6YYNGsFss4A2UukDxYWAuNdBZaGv-HDkpneZGyHQP-wxTR5Y2xVNv-IoznF2FpQ"/>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-surface"></div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-surface leading-tight">Sophea N.</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Phnom Penh
              </p>
            </div>
          </div>
          <div className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Course Progress</span>
              <span className="font-label-caps text-label-caps text-primary">65%</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="mb-6 flex items-start gap-3">
            <div className="p-2 bg-secondary-container/30 rounded-lg text-secondary">
              <span className="material-symbols-outlined text-[20px]">event</span>
            </div>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Next Session</p>
              <p className="font-body-md text-body-md text-on-surface font-medium">Oct 24, 2:00 PM</p>
            </div>
          </div>
          <div className="mt-auto flex gap-3">
            <Link href="/messages" className="flex-1 bg-surface-container-highest text-on-surface hover:bg-surface-dim transition-colors py-3 rounded-full font-label-caps text-label-caps flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Message
            </Link>
            <Link href="/schedule" className="flex-1 bg-primary text-on-primary hover:opacity-90 transition-opacity py-1.5 pl-5 pr-1.5 rounded-full font-label-caps text-label-caps flex items-center justify-between group">
              <span>Schedule</span>
              <span className="w-8 h-8 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Student Card 2 */}
        <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-shadow duration-300 flex flex-col relative group">
          <div className="absolute top-4 right-4">
            <span className="bg-primary/10 text-primary font-label-caps text-label-caps px-3 py-1 rounded-full border border-primary/20">
              Python Basics
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-container-highest relative flex-shrink-0">
              <img alt="Vireak K." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOvGlqBPDnEmYMG5vi7pTKDalVvoaY3gElDAsm5A7O98ExrMsnwmmryGvdUMLpoQMzBJgnijCQETg390wp0xvLCyus7_7cPE7LxoT5u1njJi482uPTbmPIXIZZGe1GPZbfRm0eNqQcSbXCaWg6244TV4t13gh_5S8D5pVGMQtbzQkf0H87kBVKUs9Y7SNBhGK3oDQzySSIhkKGbDf-popLAKMPO60WcL3uCNAiHO38yx5QjbzKe80WFw"/>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 rounded-full border-2 border-surface"></div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-surface leading-tight">Vireak K.</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Siem Reap
              </p>
            </div>
          </div>
          <div className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Course Progress</span>
              <span className="font-label-caps text-label-caps text-primary">30%</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="mb-6 flex items-start gap-3">
            <div className="p-2 bg-secondary-container/30 rounded-lg text-secondary">
              <span className="material-symbols-outlined text-[20px]">event</span>
            </div>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Next Session</p>
              <p className="font-body-md text-body-md text-on-surface font-medium">Not Scheduled</p>
            </div>
          </div>
          <div className="mt-auto flex gap-3">
            <Link href="/messages" className="flex-1 bg-surface-container-highest text-on-surface hover:bg-surface-dim transition-colors py-3 rounded-full font-label-caps text-label-caps flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Message
            </Link>
            <Link href="/schedule" className="flex-1 bg-primary text-on-primary hover:opacity-90 transition-opacity py-1.5 pl-5 pr-1.5 rounded-full font-label-caps text-label-caps flex items-center justify-between group">
              <span>Schedule</span>
              <span className="w-8 h-8 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Student Card 3 */}
        <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-[0px_10px_30px_rgba(14,165,233,0.05)] border border-outline-variant/20 hover:shadow-[0px_15px_40px_rgba(14,165,233,0.1)] transition-shadow duration-300 flex flex-col relative group">
          <div className="absolute top-4 right-4">
            <span className="bg-tertiary-container/20 text-tertiary-container font-label-caps text-label-caps px-3 py-1 rounded-full border border-tertiary-container/30">
              UX Research
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-container-highest relative flex-shrink-0">
              <img alt="Channary S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPlmaKqMRrvmct5zaGgU85zl-rWwjR2UvsLZf7KoBIzQqHOmfL7iLSRUYftM3nAv2idxvE22cuE32WCJTQi1sAq87O88yLJq6yLMVX_oEYA_MA-Ud4UtUDnKmzsSdi8E8FjmOZDCEFb6CSGH6roDEN_vffM67xQIcO2u0F61Dxiey2qLITy-xAGoW6A3Fdl4c6hsOInka_UgBOdpSN4bK4PgILA4Di6j-_hytPAtuyYDEfj1FyOKE_cw"/>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-surface"></div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-[20px] font-bold text-on-surface leading-tight">Channary S.</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span> Battambang
              </p>
            </div>
          </div>
          <div className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Course Progress</span>
              <span className="font-label-caps text-label-caps text-primary">85%</span>
            </div>
            <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-6 flex items-start gap-3">
            <div className="p-2 bg-secondary-container/30 rounded-lg text-secondary">
              <span className="material-symbols-outlined text-[20px]">event</span>
            </div>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Next Session</p>
              <p className="font-body-md text-body-md text-on-surface font-medium">Oct 26, 10:00 AM</p>
            </div>
          </div>
          <div className="mt-auto flex gap-3">
            <Link href="/messages" className="flex-1 bg-surface-container-highest text-on-surface hover:bg-surface-dim transition-colors py-3 rounded-full font-label-caps text-label-caps flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Message
            </Link>
            <Link href="/schedule" className="flex-1 bg-primary text-on-primary hover:opacity-90 transition-opacity py-1.5 pl-5 pr-1.5 rounded-full font-label-caps text-label-caps flex items-center justify-between group">
              <span>Schedule</span>
              <span className="w-8 h-8 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
