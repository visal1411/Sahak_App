"use client";

import React, { useState, useMemo } from 'react';
import { MentorDirectoryCard, MentorDirectoryCardProps } from '@/components/student-dashboard/MentorDirectoryCard';

const mockMentors: MentorDirectoryCardProps[] = [
  {
    id: "m-1",
    name: "Channary Tep",
    role: "National Olympiad winner. Specializing in advanced Mathematics.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP4Z_qdlE7-jCt9wdIMrTAoo6O0qtptNWFKy9jG9D4vLdz9POv7zf7kvmlCQlCXkWyOX4n6mlqVwQ25xEg5RMDcDSOlwMUXD3GergL2ZobYJ2iv2yPKZ_2qTEHRELh6fcm1u8NpUdcZwbBU79Mnwidv1POIzqWLey8JO40fl0n5eau-Q9wUVdPsLaL6eHDfWDdZ-x5NgsG2xTVud684_55mpBTyKSG3CDDsWjuo-OOWro8QDW2W1s6dw",
    rating: 4.9,
    matchScore: 95,
    subjects: ["Mathematics", "Physics"],
    pricePerHour: 15,
    matchTraits: "Visual Learner & Extroverted"
  },
  {
    id: "m-2",
    name: "Vannak Sovann",
    role: "Medical student with a passion for teaching high school Biology.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiCYkAwyr1C1OgrXiwQFAzXt-D9FE6FFLMR0lqzLu0uMQZWBJwIUF-mBvz42fKecRWGeDtvGgpYvjPiBXYWYnHnTFMrL3VnXH5HkgN-zCaaroFBEjzr3R3dpb6Grf2M4Iv1thAMJbKQcyLNDj5FbopCQXLfA28TUcHhfqmrxNy_BmoI_6u17j508qao7UKaEZtBwBfa_DGTDnhVOIOZv6DvUrmdJIzvzV52RTR13E3iF15MDaoNG_ewQ",
    rating: 4.8,
    matchScore: 88,
    subjects: ["Biology", "Chemistry"],
    pricePerHour: 10,
    matchTraits: "Structured Pace & Highly Interactive"
  },
  {
    id: "m-3",
    name: "Sophea Noun",
    role: "Literature expert helping students ace the Grade 12 Khmer exam.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy169VFAeTZeAalIBAno4QtNY4Sh-zZDx2tl6Jcj6jgKkI-z0jiTnCUlLwRRdooFc7DRBLl1CKlLpqFaAckDXIQYguEV0aVu2gh6t4VB6i9Kdjn1YvaFULz8c1i3kpsiw4kuywZTfx3kxtHtxkePL5euO7CWMt4LVKlaD1llcTnpWttwGVUx6I_XFiMvYsc-FsC3T_htCzuDbnJXoDp2ZKJ8u8OhhThIEPn1oThFun8pw-TVPo1MhQ1A",
    rating: 5.0,
    matchScore: 82,
    subjects: ["Khmer Literature", "History"],
    pricePerHour: 8,
    matchTraits: "Visual Learner & Relaxed Pace"
  },
  {
    id: "m-4",
    name: "Rithy Chea",
    role: "Experienced tutor focusing on breaking down complex Chemistry formulas.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByrKHnGaFE0Eb2jCTKUCd8mQWLi6RIytKg_F9Ug0qTKvyFMiJVLcfBMm-hqXgaOwNznpbxtX59oo6llZlfYRxPZVNH5_4rKZcaGKif9_yqUz54D6nuxP6CdiKivdxo8PtXXoDLZfK8ntKbov0dUHH6gz5q1OXXOLiqJX8oRLkGUcpEN0ZuGERsBZTZjZ0Se_7KI6D3SkjIWMDX69qgZDfinYpkv_Dje0c_iI4q2b1nez1Wsiku1h6hyQ",
    rating: 4.7,
    matchScore: 78,
    subjects: ["Chemistry", "Mathematics"],
    pricePerHour: 12,
    matchTraits: "Theoretical Learner & Introverted"
  },
  {
    id: "m-5",
    name: "Panha Lay",
    role: "Engineering grad simplifying grade 12 Physics concepts.",
    avatarUrl: "https://i.pravatar.cc/150?u=panha",
    rating: 4.6,
    matchScore: 91,
    subjects: ["Physics", "Mathematics"],
    pricePerHour: 14,
    matchTraits: "Theoretical Learner & Extroverted"
  },
  {
    id: "m-6",
    name: "Chanda Kim",
    role: "IELTS 8.0 achiever helping students master English for global exams.",
    avatarUrl: "https://i.pravatar.cc/150?u=chanda",
    rating: 4.9,
    matchScore: 74,
    subjects: ["English", "Communication"],
    pricePerHour: 15,
    matchTraits: "Visual Learner & Flexible Pace"
  },
  {
    id: "m-7",
    name: "Dara Sok",
    role: "Specializes in intensive revision sessions for BacII Biology & Chemistry.",
    avatarUrl: "https://i.pravatar.cc/150?u=dara",
    rating: 4.8,
    matchScore: 85,
    subjects: ["Biology", "Chemistry"],
    pricePerHour: 9,
    matchTraits: "Structured Pace & Visual Learner"
  },
  {
    id: "m-8",
    name: "Minea Prak",
    role: "Top scorer in Mathematics offering personalized problem-solving strategies.",
    avatarUrl: "https://i.pravatar.cc/150?u=minea",
    rating: 5.0,
    matchScore: 98,
    subjects: ["Mathematics"],
    pricePerHour: 5,
    matchTraits: "Visual Learner & Structured Guidance"
  }
];

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(50);

  // Derive unique subjects from the mock data to populate chips dynamically
  const availableSubjects = useMemo(() => {
    const subjects = new Set<string>();
    mockMentors.forEach(m => m.subjects.forEach(s => subjects.add(s)));
    return ['All', ...Array.from(subjects).sort()];
  }, []);

  // Filter the mentors list
  const filteredMentors = useMemo(() => {
    return mockMentors.filter(mentor => {
      // 1. Text Search Filter (name or role)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!mentor.name.toLowerCase().includes(query) && !mentor.role.toLowerCase().includes(query)) {
          return false;
        }
      }

      // 2. Subject Filter (Chip)
      if (selectedSubject !== 'All' && !mentor.subjects.includes(selectedSubject)) {
        return false;
      }

      // 3. Price Filter (Min and Max range)
      if (mentor.pricePerHour < minPrice || mentor.pricePerHour > maxPrice) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedSubject, minPrice, maxPrice]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8">
      
      {/* Header & Filter Section */}
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-headline-lg text-[32px] md:text-display-lg font-bold text-on-surface mb-2">
          Discover <span className="bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent">Mentors</span>
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-2xl mb-8">
          Find the perfect guide for your Grade 12 exams. We've highlighted mentors whose teaching styles match your personality profile.
        </p>

        {/* Global Filter Bar */}
        <div className="flex flex-col gap-6 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 p-6 rounded-3xl shadow-sm">
          
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Search Box */}
            <div className="flex-1 relative">
              <label className="font-label-caps text-[12px] uppercase text-on-surface-variant opacity-80 mb-2 block">Search</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
                <input 
                  type="text" 
                  placeholder="Focus area, mentor name, or keywords..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 bg-surface/50 border border-outline-variant/30 rounded-xl font-body-md text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Price Range Inputs */}
            <div className="shrink-0 flex flex-col gap-2">
              <label className="font-label-caps text-[12px] uppercase text-on-surface-variant opacity-80 block">Hourly Rate Range</label>
              <div className="flex items-center gap-2">
                {/* Min Input */}
                <div className="flex border border-outline-variant/30 rounded-xl overflow-hidden bg-surface/80 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all h-12 w-32">
                  <div className="flex items-center justify-center pl-3 pr-2 bg-surface-variant/20 border-r border-outline-variant/20 shrink-0">
                    <span className="font-body-sm font-bold text-on-surface-variant">Min $</span>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={minPrice}
                    onChange={(e) => {
                       const value = parseInt(e.target.value);
                       setMinPrice(isNaN(value) ? 0 : value);
                    }}
                    className="w-full px-3 font-body-md font-bold text-primary outline-none border-none focus:ring-0 bg-transparent appearance-none"
                  />
                </div>
                
                <span className="text-on-surface-variant font-bold">-</span>
                
                {/* Max Input */}
                <div className="flex border border-outline-variant/30 rounded-xl overflow-hidden bg-surface/80 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all h-12 w-32">
                  <div className="flex items-center justify-center pl-3 pr-2 bg-surface-variant/20 border-r border-outline-variant/20 shrink-0">
                    <span className="font-body-sm font-bold text-on-surface-variant">Max $</span>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={maxPrice}
                    onChange={(e) => {
                       const value = parseInt(e.target.value);
                       setMaxPrice(isNaN(value) ? 0 : value);
                    }}
                    className="w-full px-3 font-body-md font-bold text-primary outline-none border-none focus:ring-0 bg-transparent appearance-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Subject Chips */}
          <div>
            <label className="font-label-caps text-[12px] uppercase text-on-surface-variant opacity-80 mb-3 block">Course / Subject</label>
            <div className="flex flex-wrap gap-2">
              {availableSubjects.map(sub => {
                const isActive = selectedSubject === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-4 py-2 rounded-full font-body-sm font-semibold transition-all duration-300 border ${
                      isActive 
                        ? 'bg-primary border-primary text-on-primary shadow-sm hover:opacity-90' 
                        : 'bg-surface/50 border-outline-variant/40 text-on-surface hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Display */}
      {filteredMentors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
          {filteredMentors.map(mentor => (
            <MentorDirectoryCard 
              key={mentor.id}
              {...mentor}
              matchScore={mentor.matchScore} 
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="w-full bg-surface-container/50 border border-outline-variant/20 rounded-3xl py-16 flex flex-col items-center justify-center text-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center text-outline mb-4">
            <span className="material-symbols-outlined text-[40px]">person_search</span>
          </div>
          <h3 className="font-headline-lg text-[20px] text-on-surface mb-2">No Mentors Found</h3>
          <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
            We couldn't find any mentors matching your exact filters. Try adjusting your search query, subject, or extending your max price range.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('All');
              setMinPrice(0);
              setMaxPrice(50);
            }}
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-body-sm font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
}
