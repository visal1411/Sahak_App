import React, { useState } from 'react';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

const AVAILABLE_SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", 
  "Biology", "Computer Science", "Economics", 
  "History", "Literature", "Art & Design",
  "Business Studies", "Law", "Medicine"
];

const AVAILABILITY = [
  "Weekdays", "Weekends", "Evenings"
];

interface EditSubjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubjects: string[];
  currentPrice: string;
  currentAvailability: string[];
  onSave: (newSubjects: string[], newPrice: string, newAvailability: string[]) => void;
}

export function EditSubjectsModal({ isOpen, onClose, currentSubjects, currentPrice, currentAvailability, onSave }: EditSubjectsModalProps) {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(currentSubjects);
  const [price, setPrice] = useState<string>(currentPrice);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(currentAvailability);

  if (!isOpen) return null;

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const toggleAvailability = (time: string) => {
    if (selectedAvailability.includes(time)) {
      setSelectedAvailability(selectedAvailability.filter(t => t !== time));
    } else {
      setSelectedAvailability([...selectedAvailability, time]);
    }
  };

  const handleSave = () => {
    onSave(selectedSubjects, price, selectedAvailability);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-outline/20 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-[24px] shadow-brand-card flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
            </div>
            <h2 className="font-headline-lg-mobile text-[24px] text-on-surface text-stat-display">Edit Teaching Subjects</h2>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-8">
          
          {/* Subjects Section */}
          <div>
            <h3 className="font-headline-lg-mobile text-[18px] text-on-surface mb-2 tracking-tight">Teaching Subjects</h3>
            <div className="flex flex-wrap gap-3">
              {AVAILABLE_SUBJECTS.map((subject) => {
                const isSelected = selectedSubjects.includes(subject);
                return (
                  <button
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    className={`px-4 py-2 rounded-full font-label-caps text-label-caps transition-colors shadow-sm ${
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
          </div>

          <div className="w-full h-px bg-outline-variant/30"></div>

          {/* Price and Availability Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Price section */}
            <div>
              <h3 className="font-headline-lg-mobile text-[18px] text-on-surface mb-2 tracking-tight">Hourly Rate</h3>
              <div className="relative w-full max-w-[160px]">
                <span className="font-display-lg text-[24px] font-semibold text-primary absolute left-3 top-1/2 -translate-y-1/2">$</span>
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl py-3 pl-10 pr-4 font-display-lg text-[24px] font-semibold text-on-surface focus:ring-2 focus:ring-primary outline-none"
                  min="0"
                  step="5"
                />
              </div>
            </div>

            {/* Availability Section */}
            <div>
              <h3 className="font-headline-lg-mobile text-[18px] text-on-surface mb-2 tracking-tight">Availability</h3>
              <div className="flex flex-col gap-2">
                {AVAILABILITY.map((time) => {
                  const isSelected = selectedAvailability.includes(time);
                  return (
                    <button
                      key={time}
                      onClick={() => toggleAvailability(time)}
                      className={`px-3 py-2 rounded-lg font-body-sm text-center transition-all ${
                        isSelected 
                          ? 'bg-primary/10 text-primary border border-primary' 
                          : 'bg-surface-container border border-transparent text-on-surface hover:bg-surface-variant'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 border-t border-outline-variant/30 flex justify-end gap-4 bg-surface-container-low">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-full font-label-caps text-label-caps text-on-surface hover:bg-surface-variant transition-colors"
          >
            Cancel
          </button>
          <div className="w-auto min-w-[140px]">
            <BadgeArrowButton 
              label="Save Changes" 
              type="button"
              onClick={handleSave}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
