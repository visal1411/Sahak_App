"use client";

import React, { useState, useEffect } from 'react';
import { StatCard } from '@/components/dashboard/StatCard';
import { BookingCard } from '@/components/dashboard/BookingCard';
import { EditSubjectsModal } from '@/components/dashboard/EditSubjectsModal';
import Link from 'next/link';

export default function MentorDashboard() {
  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [confirmedSubjects, setConfirmedSubjects] = useState<string[]>(['Mathematics', 'Physics']);
  const [confirmedPrice, setConfirmedPrice] = useState<string>("15");
  const [confirmedAvailability, setConfirmedAvailability] = useState<string[]>(["Weekdays"]);

  useEffect(() => {
    if (window.location.search.includes('setup=complete')) {
      setIsSetupComplete(true);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Welcome back, <span className="text-primary hover:text-primary-fixed-dim transition-colors">Jane</span>! 👋
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Here's what's happening with your mentoring sessions today.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap">
        
        {/* Dynamic Hero Cell (spans 2 columns on desktop) */}
        <div className="lg:col-span-2">
          {!isSetupComplete ? (
            <div className="flex flex-col justify-center items-center h-full bg-surface-container-lowest p-8 md:p-12 rounded-[24px] border-2 border-primary/40 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden animate-soft-pulse text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[32px]">person_edit</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Complete Your Profile
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8">
                To start receiving session requests from students, you need to set your subjects, hourly rate, and availability.
              </p>
              <Link href="/profile/setup" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-sm">
                GO TO SETUP
              </Link>
            </div>
          ) : (
            <div className="h-full bg-surface-container-lowest p-6 md:p-8 rounded-[24px] border border-outline-variant/30 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full animate-soft-pulse border-2 border-surface-container-lowest"></span>
                  </div>
                  <h2 className="font-headline-lg text-stat-display text-on-surface tracking-tight">
                    Incoming Requests
                  </h2>
                </div>
                <Link href="/schedule" className="font-body-sm text-body-sm text-primary hover:text-primary-fixed-dim transition-colors font-medium flex items-center gap-1">
                  View Schedule <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <BookingCard 
                  studentName="Sokha Chhean" 
                  course="Mathematics" 
                  time="Today, 2:00 PM" 
                  status="pending" 
                  avatarUrl="https://i.pravatar.cc/150?u=sokha"
                />
                <BookingCard 
                  studentName="Panha Lay" 
                  course="Physics" 
                  time="Tomorrow, 10:00 AM" 
                  status="pending" 
                  avatarUrl="https://i.pravatar.cc/150?u=panha"
                />
              </div>
            </div>
          )}
        </div>

        {/* Standard Stat Cells */}
        <StatCard 
          title="Total Earnings" 
          value="$240.00" 
          icon="account_balance_wallet" 
          trend={{ value: "+12%", isPositive: true }}
        />
        
        <StatCard 
          title="Avg Rating" 
          value="4.9" 
          icon="star" 
          trend={{ value: "+0.1", isPositive: true }}
        />
        
        <StatCard 
          title="Completed Sessions" 
          value="24" 
          icon="check_circle" 
        />

        {/* Recent Students Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col h-full bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <h2 className="font-headline-lg text-stat-display text-on-surface tracking-tight">
                My Students
              </h2>
            </div>
            <Link href="/students" className="font-body-sm text-body-sm text-tertiary hover:opacity-80 transition-colors font-medium flex items-center gap-1">
              View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
             {/* Student List Item */}
             <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-variant/20 transition-colors cursor-pointer group">
               <div className="flex items-center gap-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy169VFAeTZeAalIBAno4QtNY4Sh-zZDx2tl6Jcj6jgKkI-z0jiTnCUlLwRRdooFc7DRBLl1CKlLpqFaAckDXIQYguEV0aVu2gh6t4VB6i9Kdjn1YvaFULz8c1i3kpsiw4kuywZTfx3kxtHtxkePL5euO7CWMt4LVKlaD1llcTnpWttwGVUx6I_XFiMvYsc-FsC3T_htCzuDbnJXoDp2ZKJ8u8OhhThIEPn1oThFun8pw-TVPo1MhQ1A" alt="Sophea N." className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface">Sophea N.</h4>
                    <p className="font-body-sm text-outline text-[12px]">UX/UI Design • Next: Today, 2:00PM</p>
                  </div>
               </div>
               <Link href="/messages" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
                 <span className="material-symbols-outlined text-[16px]">chat</span>
               </Link>
             </div>

             {/* Student List Item */}
             <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-variant/20 transition-colors cursor-pointer group">
               <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=panha" alt="Panha Lay" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface">Panha Lay</h4>
                    <p className="font-body-sm text-outline text-[12px]">Physics • Next: Tomorrow</p>
                  </div>
               </div>
               <Link href="/messages" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
                 <span className="material-symbols-outlined text-[16px]">chat</span>
               </Link>
             </div>

             {/* Student List Item */}
             <div className="flex items-center justify-between p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-variant/20 transition-colors cursor-pointer group">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-headline-lg flex items-center justify-center">
                    C
                  </div>
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface">Chanda K.</h4>
                    <p className="font-body-sm text-outline text-[12px]">Mathematics • 4 past sessions</p>
                  </div>
               </div>
               <Link href="/messages" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-on-primary transition-all">
                 <span className="material-symbols-outlined text-[16px]">chat</span>
               </Link>
             </div>
          </div>
        </div>

        {/* Confirmed Setup Summary */}
        {isSetupComplete && (
          <div className="col-span-1 flex flex-col justify-between h-full bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 relative">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    menu_book
                  </span>
                </div>
                <button 
                  onClick={() => setIsEditModalOpen(true)}
                  className="flex items-center gap-1 text-primary hover:text-primary-fixed-dim transition-colors font-body-sm text-body-sm font-medium"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Edit
                </button>
              </div>
              
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">Teaching Subjects</p>
              <div className="flex flex-wrap gap-2">
                {confirmedSubjects.map(subject => (
                  <span key={subject} className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps whitespace-nowrap">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center w-full">
              <span className="font-body-sm text-on-surface-variant">Standard Rate:</span>
              <span className="font-stat-display text-[20px] text-on-surface font-semibold">${confirmedPrice}/hr</span>
            </div>
          </div>
        )}

      </div>
      
      {/* Edit Profile Modal */}
      <EditSubjectsModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentSubjects={confirmedSubjects}
        currentPrice={confirmedPrice}
        currentAvailability={confirmedAvailability}
        onSave={(newSubjects, newPrice, newAvailability) => {
          setConfirmedSubjects(newSubjects);
          setConfirmedPrice(newPrice);
          setConfirmedAvailability(newAvailability);
        }}
      />
    </div>
  );
}
