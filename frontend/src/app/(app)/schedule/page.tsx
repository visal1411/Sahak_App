"use client";

import React, { useState, useCallback } from 'react';
import { Calendar, dateFnsLocalizer, View, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays, subDays } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar-overrides.css'; // We will create this for SAHAK branding

// Configure calendar localization using date-fns
const locales = {
  'en-US': enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Real Date computation for sample events
const today = new Date();
const EVENTS = [
  {
    id: 1,
    title: 'Intro to Python',
    student: 'Sokha',
    // Sets it to 10:00 AM Today
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
    type: 'tutoring',
  },
  {
    id: 2,
    title: 'Data Structures',
    enrolled: '4/5',
    // Sets it to 1:00 PM Tomorrow
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 13, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14, 30),
    type: 'group',
  }
];

// Custom Event Component to retain the SAHAK aesthetic
const CustomEvent = ({ event }: any) => {
  if (event.type === 'tutoring') {
    return (
      <div className="flex flex-col h-full bg-primary/10 border-l-4 border-primary rounded p-1.5 shadow-sm overflow-hidden text-on-surface">
        <span className="text-xs font-bold text-primary truncate leading-tight">{event.title}</span>
        <div className="mt-auto flex items-center gap-1.5 pt-1">
          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[8px] text-primary shrink-0">
            {event.student.charAt(0)}
          </div>
          <span className="text-[10px] text-on-surface-variant truncate">{event.student}</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-full bg-[#F7FEE7] border-l-4 border-[#84CC16] rounded p-1.5 shadow-sm overflow-hidden text-on-surface">
      <div className="flex justify-between items-start gap-1">
        <span className="text-xs font-bold text-[#65A30D] truncate leading-tight">{event.title}</span>
        <span className="material-symbols-outlined text-[12px] text-[#65A30D] shrink-0">groups</span>
      </div>
      <span className="text-[10px] text-[#65A30D]/70 font-medium mt-auto">{event.enrolled}</span>
    </div>
  );
};


export default function SchedulePage() {
  const [isOnline, setIsOnline] = useState(false);
  const [view, setView] = useState<View>(Views.WEEK);
  const [date, setDate] = useState(new Date());

  // Custom Navigation handlers
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);
  
  const handlePrev = useCallback(() => {
    if (view === Views.MONTH) {
      const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      onNavigate(prevMonth);
    } else {
      onNavigate(subDays(date, 7));
    }
  }, [view, date, onNavigate]);

  const handleNext = useCallback(() => {
    if (view === Views.MONTH) {
      const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      onNavigate(nextMonth);
    } else {
      onNavigate(addDays(date, 7));
    }
  }, [view, date, onNavigate]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8 h-[calc(100vh-80px)] flex flex-col pt-12 md:pt-8 overflow-hidden">
      
      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Schedule Management</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your availability and upcoming mentoring sessions.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => alert('Add Availability Modal')}
            className="flex items-center pl-6 pr-2 py-2 rounded-full font-semibold transition-all bg-surface-container-high text-on-surface hover:bg-surface-container-highest shadow-sm active:scale-95"
          >
            <span>Add Availability</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full ml-4 bg-primary text-on-primary">
              <span className="material-symbols-outlined text-sm">add</span>
            </div>
          </button>
          
          <button 
            onClick={() => alert('Create Group Class Modal')}
            className="flex items-center pl-6 pr-2 py-2 rounded-full font-semibold transition-all text-white shadow-md hover:opacity-90 bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] active:scale-95"
          >
            <span>Create Group Class</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full ml-4 bg-tertiary-fixed text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined text-sm">groups</span>
            </div>
          </button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-card-gap flex-1 min-h-0">
        
        {/* Left Column: Stats & Quick Actions */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          
          {/* Quick Toggle Card */}
          <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-brand-card rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-lg-mobile text-[24px] text-on-surface">Quick Help</h3>
              <div 
                className={`w-12 h-6 rounded-full relative cursor-pointer border transition-colors duration-300 ${isOnline ? 'bg-[#22C55E] border-[#22C55E]' : 'bg-surface-variant border-outline-variant'}`}
                onClick={() => setIsOnline(!isOnline)}
              >
                <div className={`w-5 h-5 absolute top-0.5 rounded-full transition-transform duration-300 ${isOnline ? 'bg-white translate-x-[22px]' : 'bg-outline left-0.5'}`}></div>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Toggle on to indicate you are available right now for instant 15-min help sessions.</p>
            
            {isOnline && (
              <div className="mt-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 flex items-start gap-3 animate-fade-in">
                <span className="material-symbols-outlined text-[#16A34A] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <span className="block font-body-sm text-body-sm font-semibold text-[#16A34A]">You are online</span>
                  <span className="block font-label-caps text-label-caps text-[#15803D] mt-1 opacity-80 uppercase">Visible to students</span>
                </div>
              </div>
            )}
          </div>

          {/* Upcoming Stats Card */}
          <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-brand-card rounded-xl p-6 flex flex-col flex-1">
            <h3 className="font-headline-lg-mobile text-[24px] text-on-surface mb-6">Upcoming This Week</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center pb-4 border-b border-surface-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>co_present</span>
                  </div>
                  <div>
                    <span className="block font-stat-display text-stat-display text-on-surface">12</span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant">Tutoring Sessions</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-surface-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D]">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                  </div>
                  <div>
                    <span className="block font-stat-display text-stat-display text-on-surface">3</span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant">Group Classes</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  </div>
                  <div>
                    <span className="block font-stat-display text-stat-display text-on-surface">8.5h</span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant">Total Hours Booked</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-container">
                      Weekly Goal: 10h
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">85%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-surface-variant">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Open Source Calendar */}
        <div className="flex-1 bg-white rounded-xl flex flex-col overflow-hidden shadow-brand-card border border-outline-variant/20 min-h-[500px] overflow-x-auto">
          
          {/* Custom Calendar Header replacing the default Toolbar */}
          <div className="flex items-center justify-between p-4 border-b border-surface-variant/60 shrink-0 min-w-[600px]">
            <div className="flex items-center gap-4">
              <h2 className="font-headline-lg-mobile text-[24px] text-on-surface">
                {format(date, 'MMMM yyyy')}
              </h2>
              <div className="flex gap-1">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button 
                  onClick={() => onNavigate(new Date())}
                  className="px-3 h-8 rounded-full hover:bg-surface-variant text-sm font-medium text-on-surface-variant transition-colors"
                >
                  Today
                </button>
                <button 
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="flex bg-surface-variant p-1 rounded-lg">
              <button 
                onClick={() => setView(Views.WEEK)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors shadow-sm ${view === Views.WEEK ? 'bg-surface text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Week
              </button>
              <button 
                onClick={() => setView(Views.MONTH)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors shadow-sm ${view === Views.MONTH ? 'bg-surface text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Month
              </button>
            </div>
          </div>

          <div className="flex-1 p-2 min-w-[700px] custom-sahak-calendar">
            <Calendar
              localizer={localizer}
              events={EVENTS}
              date={date}
              view={view}
              onView={(newView) => setView(newView)}
              onNavigate={onNavigate}
              // Hide the default toolbar because we built our own custom beautiful one above!
              toolbar={false}
              min={new Date(0, 0, 0, 8, 0, 0)} // Start day at 8am
              max={new Date(0, 0, 0, 20, 0, 0)} // End day at 8pm
              components={{
                event: CustomEvent
              }}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
