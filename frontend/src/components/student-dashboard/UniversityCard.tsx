import React from 'react';
import Link from 'next/link';

export interface UniversityCardProps {
  id: string;
  name: string;
  province: string;
  type: 'Public' | 'Private';
  tuitionRange: string;
  imageUrl: string;
  tags: string[];
  facilities: string;
  website: string;
}

export function UniversityCard({
  name,
  province,
  type,
  tuitionRange,
  imageUrl,
  tags,
  facilities,
  website,
}: UniversityCardProps) {
  // Determine badge colors based on type
  const typeBadgeColor = type === 'Public' ? 'bg-secondary/10 text-secondary' : 'bg-brand-amber/10 text-brand-amber';
  const tagColor = type === 'Public' ? 'bg-secondary/10 text-secondary' : 'bg-brand-amber/10 text-brand-amber';
  const iconColor = type === 'Public' ? 'text-secondary' : 'text-brand-amber';

  // Generate a short acronym for the logo box
  const acronym = name.split(' ').filter(word => word.length > 2).map(word => word[0]).join('').substring(0, 4).toUpperCase();

  return (
    <article className="bg-white rounded-[24px] overflow-hidden shadow-[0px_10px_30px_rgba(14,165,233,0.1)] hover:shadow-[0px_20px_40px_rgba(14,165,233,0.15)] transition-shadow duration-300 flex flex-col group relative">
      
      {/* Bookmark Button */}
      <div className="absolute top-4 right-4 z-10 p-2 bg-white/70 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white hover:text-brand-amber transition-colors border border-white/20">
        <span className="material-symbols-outlined text-outline-variant hover:text-brand-amber text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>bookmark</span>
      </div>

      {/* Image Cover */}
      <div className="h-48 relative overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col gap-4 flex-grow relative pt-12">
        
        {/* Floating Logo Box */}
        <div className="absolute -top-10 left-6 w-20 h-20 rounded-[1.25rem] bg-white p-2 shadow-sm border border-outline-variant flex items-center justify-center overflow-hidden">
          <div className={`w-full h-full ${typeBadgeColor} rounded-lg flex items-center justify-center font-display-lg text-[20px]`}>
            {acronym}
          </div>
        </div>

        {/* Title and Meta */}
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg text-[22px] md:text-headline-lg text-on-surface line-clamp-2 leading-tight">{name}</h2>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-1">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            {type} • {province}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <span key={tag} className={`px-3 py-1 ${tagColor} font-label-caps text-[10px] uppercase font-bold rounded-full`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Details */}
        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-col gap-3">
          <div className="flex items-center justify-between font-body-sm text-body-sm">
            <span className="text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">payments</span> Tuition
            </span>
            <span className="font-stat-display text-[16px] text-on-surface font-semibold">{tuitionRange}</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm">
            <span className="text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">domain</span> Facilities
            </span>
            <span className="text-on-surface font-medium truncate max-w-[150px]">{facilities}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-surface-variant/50 relative z-10 w-full">
          <Link 
            href={website} 
            target="_blank"
            className="w-full flex items-center justify-center py-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-primary font-body-sm font-semibold hover:bg-primary/5 transition-colors active:scale-95 border border-outline-variant/30"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </article>
  );
}
