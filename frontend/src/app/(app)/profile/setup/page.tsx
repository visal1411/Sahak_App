"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

const AVAILABLE_SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", 
  "Biology", "Computer Science", "Economics", 
  "History", "Literature", "Art & Design",
  "Business Studies", "Law", "Medicine"
];

const GRADE_LEVELS = [
  "High School (Grade 10-12)",
  "University (Undergrad)",
  "Professional / Alumni"
];

const AVAILABILITY = [
  "Weekdays", "Weekends", "Evenings"
];

export default function ProfileSetupPage() {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [hourlyRate, setHourlyRate] = useState<string>("15");

  const toggleSelection = (item: string, list: string[], setList: (val: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSave = () => {
    // In a real app, this sends data to the backend.
    // For now, we simulate saving and redirect back to dashboard.
    router.push('/dashboard?setup=complete');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 pb-24">
      {/* Header section */}
      <div className="mb-10">
        <Link href="/dashboard" className="inline-flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors mb-4">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Dashboard
        </Link>
        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
          Complete Your Setup
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
          Craft your teaching profile by selecting the subjects you master, the grades you prefer to teach, and your availability so students can find you.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* Course / Subject Selection */}
        <section className="bg-surface-container-lowest brand-shadow-card p-6 md:p-8 rounded-[24px] border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
            </div>
            <h2 className="font-headline-lg-mobile text-[24px] text-on-surface text-stat-display">Teaching Subjects</h2>
          </div>
          
          <p className="font-body-sm text-on-surface-variant">Select all the subjects you are competent and willing to tutor.</p>
          
          <div className="flex flex-wrap gap-3">
            {AVAILABLE_SUBJECTS.map((subject) => {
              const isSelected = selectedSubjects.includes(subject);
              return (
                <button
                  key={subject}
                  onClick={() => toggleSelection(subject, selectedSubjects, setSelectedSubjects)}
                  className={`px-5 py-2.5 rounded-full font-label-caps text-label-caps transition-colors shadow-sm ${
                    isSelected 
                      ? 'bg-primary text-on-primary' 
                      : 'bg-surface-container text-on-surface hover:bg-surface-variant'
                  }`}
                >
                  {subject}
                </button>
              );
            })}
          </div>
        </section>

        {/* Grade Level Selection */}
        <section className="bg-surface-container-lowest brand-shadow-card p-6 md:p-8 rounded-[24px] border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <h2 className="font-headline-lg-mobile text-[24px] text-on-surface text-stat-display">Grade Levels</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {GRADE_LEVELS.map((grade) => {
              const isSelected = selectedGrades.includes(grade);
              return (
                <label key={grade} className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="peer sr-only" 
                      checked={isSelected}
                      onChange={() => toggleSelection(grade, selectedGrades, setSelectedGrades)}
                    />
                    <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'border-2 border-primary bg-primary' 
                        : 'border-2 border-outline group-hover:border-primary'
                    }`}>
                      {isSelected && <span className="material-symbols-outlined text-white text-[16px] font-bold">check</span>}
                    </div>
                  </div>
                  <span className={`font-body-md ${isSelected ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>
                    {grade}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Pricing and Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Rate Setup */}
          <section className="bg-surface-container-lowest brand-shadow-card p-6 md:p-8 rounded-[24px] border border-outline-variant/30 flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </div>
              <h2 className="font-headline-lg-mobile text-[24px] text-on-surface text-stat-display">Hourly Rate</h2>
            </div>
            
            <p className="font-body-sm text-on-surface-variant">Set your standard rate per one-hour mentoring session.</p>
            
            <div className="relative w-full max-w-[200px]">
              <span className="font-display-lg text-[32px] font-semibold text-primary absolute left-4 top-1/2 -translate-y-1/2">$</span>
              <input 
                type="number" 
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-6 font-display-lg text-[32px] font-semibold text-on-surface focus:ring-2 focus:ring-primary outline-none"
                min="0"
                step="5"
              />
              <span className="font-body-sm text-on-surface-variant absolute right-6 top-1/2 -translate-y-1/2">/ hr</span>
            </div>
          </section>

          {/* Availability */}
          <section className="bg-surface-container-lowest brand-shadow-card p-6 md:p-8 rounded-[24px] border border-outline-variant/30 flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
              </div>
              <h2 className="font-headline-lg-mobile text-[24px] text-on-surface text-stat-display">Availability</h2>
            </div>
            
            <p className="font-body-sm text-on-surface-variant">When are you generally free to mentor?</p>
            
            <div className="grid grid-cols-2 gap-3 mt-2">
              {AVAILABILITY.map((time) => {
                const isSelected = selectedAvailability.includes(time);
                return (
                  <button
                    key={time}
                    onClick={() => toggleSelection(time, selectedAvailability, setSelectedAvailability)}
                    className={`px-4 py-4 rounded-xl font-body-sm text-center transition-all ${
                      isSelected 
                        ? 'bg-primary/10 text-primary border-2 border-primary' 
                        : 'bg-surface-container border-2 border-transparent text-on-surface hover:bg-surface-variant'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="flex justify-end pt-6 mb-12">
          <div className="w-full sm:w-auto min-w-[250px]">
            <BadgeArrowButton 
              label="Save Profile Info" 
              type="button"
              onClick={handleSave}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
