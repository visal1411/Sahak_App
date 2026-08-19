"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { UniversityCard } from '@/components/student-dashboard/UniversityCard';
import { EnrichedUniversity } from '@/app/api/universities/route';

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<EnrichedUniversity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('All');

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const res = await fetch('/api/universities');
        const data = await res.json();
        setUniversities(data);
      } catch (error) {
        console.error("Failed to fetch universities:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUniversities();
  }, []);

  const availableProvinces = useMemo(() => {
    const provinces = new Set<string>();
    universities.forEach(u => provinces.add(u.province));
    return ['All', ...Array.from(provinces).sort()];
  }, [universities]);

  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      if (searchQuery) {
        if (!uni.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
      }
      if (selectedProvince !== 'All' && uni.province !== selectedProvince) {
        return false;
      }
      return true;
    });
  }, [universities, searchQuery, selectedProvince]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-10">
      
      {/* Search & Filter Section */}
      <section className="flex flex-col gap-6 animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="relative w-full flex-grow">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-outline-variant bg-white focus:outline-none focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/20 transition-all font-body-md text-on-surface placeholder:text-outline shadow-[0px_10px_30px_rgba(14,165,233,0.05)]" 
              placeholder="Search universities by name..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="hidden md:flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-primary to-blue-500 text-white font-label-caps text-[12px] uppercase tracking-wider font-bold hover:shadow-[0px_10px_30px_rgba(14,165,233,0.3)] transition-shadow">
            Find Match
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Province Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none w-full">
          {availableProvinces.map(prov => {
            const isActive = selectedProvince === prov;
            return (
              <button 
                key={prov}
                onClick={() => setSelectedProvince(prov)}
                className={`px-5 py-2.5 rounded-full font-label-caps text-[12px] uppercase font-bold whitespace-nowrap transition-colors border ${
                  isActive 
                    ? 'bg-primary border-primary text-white shadow-md' 
                    : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary/50 hover:bg-primary/5 shadow-sm'
                }`}
              >
                {prov}
              </button>
            )
          })}
        </div>
      </section>

      {/* Featured University Hero */}
      <section className="w-full relative rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(14,165,233,0.15)] group cursor-pointer animate-fade-in-up delay-75">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <div 
          className="w-full h-[400px] md:h-[500px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-brand-lime text-black font-label-caps text-[12px] uppercase font-bold rounded-full">Featured</span>
              <div className="flex items-center text-white/90 font-label-caps text-[12px] uppercase font-bold gap-1">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Phnom Penh
              </div>
            </div>
            <h1 className="font-display-lg text-[32px] md:text-[48px] font-bold text-white leading-tight">American University of Phnom Penh</h1>
            <p className="font-body-md text-white/80 hidden md:block">Experience world-class education with international standards, state-of-the-art facilities, and a global alumni network right in the heart of Cambodia.</p>
          </div>
          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full flex items-center gap-4 self-start md:self-end w-full md:w-auto">
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] uppercase font-bold text-white/70">Tuition Range</span>
                <span className="font-stat-display text-[20px] font-bold text-white">$6,000 - $9,000/yr</span>
              </div>
            </div>
            <button className="w-full md:w-auto flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-white text-on-surface font-label-caps text-[12px] uppercase font-bold hover:bg-surface-variant transition-colors group/btn">
              <span>Explore Campus</span>
              <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-black group-hover/btn:bg-primary group-hover/btn:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative min-h-[400px]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-fade-in-up delay-150">
            {filteredUniversities.map(uni => (
              <UniversityCard 
                key={uni.id}
                {...uni}
                website={uni.web_pages?.[0] || "#"}
              />
            ))}
          </div>
        ) : (
          <div className="w-full bg-surface-container/50 border border-outline-variant/20 rounded-3xl py-16 flex flex-col items-center justify-center text-center animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center text-outline mb-4">
              <span className="material-symbols-outlined text-[40px]">school</span>
            </div>
            <h3 className="font-headline-lg text-[20px] text-on-surface mb-2">No Universities Found</h3>
            <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
              There are no universities found in this province matching your search.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedProvince('All');
              }}
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-body-sm font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
      
    </div>
  );
}
