"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function StudentSettingsPage() {
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingComm, setMarketingComm] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8">
      <div className="mb-8 lg:hidden animate-fade-in-up">
        <h1 className="font-display-lg text-headline-lg font-bold text-on-surface mb-2">Settings</h1>
        <p className="font-body-md text-on-surface-variant">Manage your account preferences and configurations.</p>
      </div>

      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in-up delay-75">
        
        {/* Account Section (Spans 8 columns on desktop) */}
        <section className="md:col-span-8 bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-6 border border-outline-variant/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="flex items-center gap-3 border-b border-surface-variant/50 pb-4 mt-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </div>
            <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">Account Details</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[12px] uppercase font-bold text-on-surface-variant tracking-wider">Email Address</label>
              <input 
                className="w-full bg-surface-container-lowest px-5 py-4 rounded-full border border-outline-variant/40 font-body-md text-on-surface outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10" 
                type="email" 
                defaultValue="student@sahak.edu.kh"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[12px] uppercase font-bold text-on-surface-variant tracking-wider">Password</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-lowest px-5 py-4 rounded-full border border-outline-variant/40 font-body-md text-on-surface outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 pr-24" 
                  type="password" 
                  defaultValue="********"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-label-caps text-[12px] uppercase font-bold hover:text-primary-container bg-primary/5 px-3 py-1.5 rounded-full transition-colors">
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[12px] uppercase font-bold text-on-surface-variant tracking-wider">Display Name</label>
              <input 
                className="w-full bg-surface-container-lowest px-5 py-4 rounded-full border border-outline-variant/40 font-body-md text-on-surface outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10" 
                type="text" 
                defaultValue="Sokunthea V."
              />
            </div>
          </div>
          
          <div className="mt-auto pt-6 flex justify-end">
            <button className="bg-primary text-on-primary font-label-caps text-[12px] uppercase font-bold py-3.5 px-8 rounded-full flex items-center justify-between hover:bg-primary/90 transition-colors shadow-sm gap-2 active:scale-95">
              Save Changes
              <span className="material-symbols-outlined text-[18px]">check</span>
            </button>
          </div>
        </section>

        {/* Mentorship Activity (Spans 4 columns) */}
        <section className="md:col-span-4 bg-gradient-to-br from-primary to-blue-600 text-on-primary rounded-3xl p-8 shadow-sm flex flex-col gap-4 relative overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
          
          <div className="flex items-center justify-between relative z-10 w-full mb-2">
            <h2 className="font-headline-lg text-[22px] font-bold">Mentorship</h2>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            </div>
          </div>
          
          <div className="mt-4 relative z-10">
            <div className="font-label-caps text-[11px] uppercase font-bold text-white/80 tracking-wider mb-1">Total Sessions</div>
            <div className="font-display-lg text-[36px] font-bold text-white leading-tight">12 <span className="text-[20px] font-medium opacity-80">hrs</span></div>
          </div>
          
          <div className="bg-black/20 rounded-2xl p-5 mt-auto backdrop-blur-md border border-white/10 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-body-sm text-[13px] text-white/80 font-medium">Next session</span>
              <span className="font-body-sm text-[13px] font-bold text-white">Tomorrow, 10 AM</span>
            </div>
            <Link href="/student-dashboard" className="w-full bg-white text-primary font-label-caps text-[12px] uppercase font-bold py-3 px-4 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors shadow-sm">
              View Schedule
            </Link>
          </div>
        </section>

        {/* Notifications (Spans 6 columns) */}
        <section className="md:col-span-6 bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-5 border border-outline-variant/20">
          <div className="flex items-center gap-3 border-b border-surface-variant/50 pb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
            </div>
            <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">Notifications</h2>
          </div>
          
          <div className="space-y-6 pt-2">
            {/* Toggle 1 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body-md font-bold text-on-surface">Email Updates</h3>
                <p className="font-body-sm text-on-surface-variant">Weekly mentor recommendations</p>
              </div>
              <button 
                onClick={() => setEmailUpdates(!emailUpdates)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${emailUpdates ? 'bg-primary' : 'bg-outline-variant/40'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${emailUpdates ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            {/* Toggle 2 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body-md font-bold text-on-surface">Push Notifications</h3>
                <p className="font-body-sm text-on-surface-variant">Direct messages &amp; session alerts</p>
              </div>
              <button 
                onClick={() => setPushNotifications(!pushNotifications)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${pushNotifications ? 'bg-primary' : 'bg-outline-variant/40'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${pushNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            {/* Toggle 3 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body-md font-bold text-on-surface">Marketing Comm.</h3>
                <p className="font-body-sm text-on-surface-variant">Promotions and new features</p>
              </div>
              <button 
                onClick={() => setMarketingComm(!marketingComm)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${marketingComm ? 'bg-primary' : 'bg-outline-variant/40'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${marketingComm ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Privacy & Security (Spans 6 columns) */}
        <section className="md:col-span-6 bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-5 border border-outline-variant/20">
          <div className="flex items-center gap-3 border-b border-surface-variant/50 pb-4">
            <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary shadow-sm">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            </div>
            <h2 className="font-headline-lg text-[22px] font-bold text-on-surface">Privacy</h2>
          </div>
          
          <div className="space-y-6 pt-2">
            {/* Toggle 4 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body-md font-bold text-on-surface">Public Profile</h3>
                <p className="font-body-sm text-on-surface-variant">Allow mentors to find you</p>
              </div>
              <button 
                onClick={() => setPublicProfile(!publicProfile)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${publicProfile ? 'bg-primary' : 'bg-outline-variant/40'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${publicProfile ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            {/* Toggle 5 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body-md font-bold text-on-surface">Data Sharing</h3>
                <p className="font-body-sm text-on-surface-variant">Share analytics for better matches</p>
              </div>
              <button 
                onClick={() => setDataSharing(!dataSharing)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${dataSharing ? 'bg-primary' : 'bg-outline-variant/40'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${dataSharing ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="pt-4 mt-4 border-t border-surface-variant/50 flex flex-col gap-2">
              <Link href="/" className="text-on-surface-variant font-body-sm font-bold hover:text-on-surface flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg hover:bg-surface-variant/50 transition-colors w-max">
                <span className="material-symbols-outlined text-[18px]">logout</span>
                Log Out
              </Link>
              <button className="text-error font-body-sm font-bold hover:underline flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg hover:bg-error/5 transition-colors w-max">
                <span className="material-symbols-outlined text-[18px]">delete_forever</span>
                Request Account Deletion
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
