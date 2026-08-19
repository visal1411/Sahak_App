import React from 'react';

interface CourseProgressCardProps {
  title: string;
  progress: number;
  icon: string;
  iconColorClass: string;
  iconBgClass: string;
  progressColorClass: string;
}

export function CourseProgressCard({
  title,
  progress,
  icon,
  iconColorClass,
  iconBgClass,
  progressColorClass,
}: CourseProgressCardProps) {
  return (
    <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-transform hover:-translate-y-1 hover:shadow-[0px_20px_40px_rgba(14,165,233,0.15)] duration-300">
      <div className={`w-12 h-12 rounded-[16px] ${iconBgClass} ${iconColorClass} flex items-center justify-center shrink-0`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-body-md font-semibold text-on-surface">{title}</h4>
          <span className="font-label-caps text-[10px] text-on-surface-variant">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-1000 ${progressColorClass}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <button className="mt-4 sm:mt-0 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-body-sm text-body-sm active:scale-95">
        Resume
      </button>
    </div>
  );
}
