import React from 'react';
import Link from 'next/link';

interface RecommendedMentorCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  matchScore: number;
  specialtyTag: string;
  specialtyTagClass: string;
  matchTraits: string;
}

export function RecommendedMentorCard({
  name,
  role,
  avatarUrl,
  rating,
  matchScore,
  specialtyTag,
  specialtyTagClass,
  matchTraits,
}: RecommendedMentorCardProps) {
  return (
    <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-[24px] p-5 min-w-[280px] w-full md:w-[280px] flex-shrink-0 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(14,165,233,0.15)] duration-300 relative overflow-hidden group">
      
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-label-caps text-[10px] uppercase font-bold z-10 ${specialtyTagClass}`}>
        {specialtyTag}
      </div>

      <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-variant mb-4 border-2 border-surface relative z-10">
        <img 
          src={avatarUrl} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <h4 className="font-body-md font-semibold text-on-surface mb-1 relative z-10">{name}</h4>
      <p className="font-body-sm text-on-surface-variant mb-4 line-clamp-2 relative z-10">{role}</p>

      {/* Personality Match Highlight */}
      <div className="flex flex-col gap-1 mb-4 p-2 bg-primary/5 rounded-lg border border-primary/20 relative z-10">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
          <span className="font-label-caps text-[10px] text-primary font-bold uppercase">{matchScore}% Match</span>
        </div>
        <p className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
          {matchTraits}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-surface-variant/50 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px] text-[#F59E0B]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="font-body-sm font-semibold text-on-surface">{rating}</span>
        </div>
        <Link href={`/mentorship/${name.toLowerCase().replace(' ', '-')}`} className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors active:scale-95">
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
