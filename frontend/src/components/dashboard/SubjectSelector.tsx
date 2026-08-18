"use client";

import React, { useState } from 'react';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

const AVAILABLE_SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", 
  "Biology", "Computer Science", "Economics", 
  "History", "Literature", "Art & Design",
  "Business Studies", "Law", "Medicine"
];

interface SubjectSelectorProps {
  onConfirm: (subjects: string[]) => void;
  isCompact?: boolean;
  selectedByDefault?: string[];
}

export function SubjectSelector({ onConfirm, isCompact = false, selectedByDefault = [] }: SubjectSelectorProps) {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(selectedByDefault);

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleConfirm = () => {
    if (selectedSubjects.length > 0) {
      onConfirm(selectedSubjects);
    }
  };

  if (isCompact) {
    return (
      <div className="flex flex-col h-full bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              menu_book
            </span>
          </div>
          <button 
            type="button"
            onClick={() => onConfirm([])} // Reset to edit
            className="flex items-center gap-1 text-primary hover:text-primary-fixed-dim transition-colors font-body-sm text-body-sm font-medium"
          >
            <span className="material-symbols-outlined text-[16px]">edit</span>
            Edit
          </button>
        </div>
        
        <div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-2">Teaching Subjects</p>
          <div className="flex flex-wrap gap-2">
            {selectedSubjects.map(subject => (
              <span key={subject} className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps whitespace-nowrap">
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-surface-container-lowest p-6 md:p-8 rounded-[24px] border-2 border-primary/40 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden animate-soft-pulse group">
      {/* Attention Glow */}
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-error/10 text-error rounded-full font-label-caps text-label-caps">
          <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
          Action Required
        </div>
      </div>

      <div className="mb-6 max-w-lg mt-2">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">
          Confirm the subjects you teach
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Students can't find you until you set up your teaching catalog. Select all that apply.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10 w-full lg:w-4/5">
        {AVAILABLE_SUBJECTS.map((subject) => {
          const isSelected = selectedSubjects.includes(subject);
          return (
            <button
              key={subject}
              onClick={() => toggleSubject(subject)}
              className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-colors ${
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

      <div className="mt-auto w-full sm:w-auto">
        <div className="w-full sm:w-[220px]">
          <BadgeArrowButton 
            label="Confirm Subjects" 
            type="button"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
}
