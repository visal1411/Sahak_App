import React from 'react';

interface BookingCardProps {
  studentName: string;
  course: string;
  time: string;
  avatarUrl?: string;
  status?: 'pending' | 'confirmed';
}

export function BookingCard({ studentName, course, time, avatarUrl, status = 'pending' }: BookingCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-[20px] bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex flex-shrink-0 items-center justify-center border border-outline-variant/30">
          {avatarUrl ? (
             <img src={avatarUrl} alt={studentName} className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-primary">person</span>
          )}
        </div>
        <div>
          <h4 className="font-body-md text-body-md text-on-surface font-semibold">{studentName}</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>book</span>
            {course}
          </p>
        </div>
      </div>
      
      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
        <div className="flex items-center gap-1.5 text-on-surface bg-surface-variant px-3 py-1 rounded-full font-body-sm text-body-sm font-medium">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          {time}
        </div>
        
        {status === 'pending' ? (
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-error/10 text-error hover:bg-error/20 flex items-center justify-center transition-colors shadow-sm" aria-label="Decline">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 flex items-center justify-center transition-colors shadow-sm" aria-label="Accept">
              <span className="material-symbols-outlined text-[18px]">check</span>
            </button>
          </div>
        ) : (
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider px-2">Confirmed</span>
        )}
      </div>
    </div>
  );
}
