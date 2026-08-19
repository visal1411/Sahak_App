import React from 'react';
import Link from 'next/link';

export interface MentorDirectoryCardProps {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  matchScore: number;
  subjects: string[];
  pricePerHour: number;
  matchTraits: string;
}

export function MentorDirectoryCard({
  id,
  name,
  role,
  avatarUrl,
  rating,
  matchScore,
  subjects,
  pricePerHour,
  matchTraits,
}: MentorDirectoryCardProps) {
  return (
    <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-[24px] p-5 w-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(14,165,233,0.15)] duration-300 relative overflow-hidden group">
      
      {/* Top Banner section */}
      <div className="flex justify-between items-start mb-4 relative z-10 w-full">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-variant border-2 border-surface shrink-0">
          <img 
            src={avatarUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="font-stat-display text-on-surface text-xl font-bold flex items-center">
            ${pricePerHour}<span className="text-sm font-normal text-on-surface-variant ml-1">/hr</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant mt-1">
            <span className="material-symbols-outlined text-[16px] text-[#F59E0B]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-body-sm font-semibold text-on-surface">{rating}</span>
          </div>
        </div>
      </div>

      <h4 className="font-body-md font-semibold text-on-surface mb-1 relative z-10 line-clamp-1">{name}</h4>
      <p className="font-body-sm text-on-surface-variant mb-4 line-clamp-2 relative z-10 h-10">{role}</p>

      {/* Subjects Tag List */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {subjects.slice(0, 2).map((subject, idx) => (
          <span key={idx} className="px-3 py-1 rounded-full bg-surface text-on-surface-variant border border-outline-variant/30 font-label-caps text-[10px] uppercase font-bold truncate max-w-[120px]">
            {subject}
          </span>
        ))}
        {subjects.length > 2 && (
          <span className="px-2 py-1 rounded-full bg-surface text-on-surface-variant font-label-caps text-[10px] font-bold">
            +{subjects.length - 2}
          </span>
        )}
      </div>

      {/* Personality Match Highlight */}
      <div className="flex flex-col gap-1 mb-4 p-3 bg-primary/5 rounded-xl border border-primary/20 relative z-10 mt-auto">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] text-primary">psychology</span>
          <span className="font-label-caps text-[12px] text-primary font-bold uppercase">{matchScore}% Match</span>
        </div>
        <p className="font-body-sm text-[12px] text-on-surface-variant leading-tight">
          {matchTraits}
        </p>
      </div>

      <div className="pt-2 border-t border-surface-variant/50 relative z-10 w-full">
        <Link 
          href={`/mentorship/${id}`} 
          className="w-full flex items-center justify-center py-2.5 rounded-full bg-primary text-on-primary font-body-sm font-semibold hover:bg-primary/90 transition-colors active:scale-95 group-hover:shadow-md"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
