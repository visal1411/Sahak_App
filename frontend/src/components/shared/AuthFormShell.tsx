import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AuthFormShellProps {
  title: string;
  subtitle?: ReactNode;
  illustrationSrc?: string;
  illustrationAlt?: string;
  children: ReactNode;
  showBackButton?: boolean;
  backButtonHref?: string;
  isTransitioning?: boolean;
}

export function AuthFormShell({
  title,
  subtitle,
  illustrationSrc,
  illustrationAlt = "Illustration",
  children,
  showBackButton = false,
  backButtonHref = "/login",
  isTransitioning = false
}: AuthFormShellProps) {
  return (
    <main className="flex w-full min-h-screen pt-16 md:pt-0 bg-background overflow-hidden relative">
      {/* Mobile Top Bar */}
      {showBackButton && (
        <header className="md:hidden w-full flex items-center px-container-padding-mobile h-16 z-20 absolute top-0 left-0">
          <Link
            href={backButtonHref}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest/50 backdrop-blur-md hover:bg-surface-variant transition-colors border border-outline-variant/20"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </Link>
        </header>
      )}

      {/* Desktop Back Button */}
      {showBackButton && (
        <Link
          href={backButtonHref}
          className="hidden md:flex absolute top-6 left-6 z-20 items-center justify-center w-12 h-12 rounded-full border border-white/50 bg-white/70 backdrop-blur-md text-primary hover:bg-surface-variant transition-colors group shadow-sm"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
        </Link>
      )}

      {/* Left Column (Illustration & Brand) */}
      <div className="hidden md:flex w-[40%] lg:w-1/2 relative brand-gradient-bg overflow-hidden flex-col justify-center items-center p-12">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-lg text-center animate-float">
          <h1 className="font-display-lg text-display-lg text-primary mb-2 tracking-tight">SAHAK <span className="font-normal opacity-80 text-[32px]">(សហការ)</span></h1>
          <p className="font-headline-lg text-headline-lg text-on-surface-variant mb-12 opacity-80">Connect. Learn. Grow.</p>
          
          <div className={`w-full h-[400px] rounded-xl relative flex items-center justify-center transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
            {illustrationSrc ? (
              <img
                src={illustrationSrc}
                alt={illustrationAlt}
                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-surface/50 border border-white/50 backdrop-blur-sm shadow-[0px_20px_40px_rgba(14,165,233,0.05)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[64px] text-outline-variant/60">image</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 opacity-75">
            <span className="font-label-caps text-label-caps bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">Mentorship</span>
            <span className="font-label-caps text-label-caps bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">Community</span>
            <span className="font-label-caps text-label-caps bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">Growth</span>
          </div>
        </div>
      </div>
      
      {/* Right Column (Form) */}
      <div className="w-full md:w-[60%] lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface-container-lowest overflow-y-auto custom-scrollbar">
        <div className="absolute top-[-15%] right-[-10%] w-[300px] h-[300px] bg-primary-fixed/40 rounded-full blur-[80px] pointer-events-none md:hidden"></div>
        <div className="absolute bottom-[-5%] left-[-15%] w-[250px] h-[250px] bg-secondary-fixed/40 rounded-full blur-[80px] pointer-events-none md:hidden"></div>

        <div className="w-full max-w-md space-y-10 py-10 relative z-10">
          <div className="md:hidden text-center mb-8">
            <h1 className="font-display-lg text-headline-lg text-primary tracking-tight">SAHAK</h1>
          </div>
          
          <div className={`space-y-3 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-display-lg md:font-display-lg text-on-surface tracking-tight">{title}</h2>
            {subtitle && <div className="font-body-md text-body-md text-on-surface-variant font-medium">{subtitle}</div>}
          </div>
          
          {children}
        </div>
      </div>
    </main>
  );
}
