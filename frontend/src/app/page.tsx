import Link from 'next/link';

// ── Temporary placeholder homepage ────────────────────────────
// This is replaced by the real dashboard/landing page in Phase 3+.
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%)',
        padding: '2rem',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Logo / wordmark */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            color: '#ffffff',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          SAHAK
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
          សហការ — Peer Learning &amp; Mentorship for Cambodia
        </p>
      </div>

      {/* Status card */}
      <div
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '2.5rem 3rem',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
        <h2 style={{ color: '#ffffff', margin: '0 0 0.75rem', fontSize: '1.4rem', fontWeight: 700 }}>
          Phase 2 Complete
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
          The infrastructure is up. Next.js frontend and Express backend are running inside
          Docker. The database and Redis are connected.
        </p>

        {/* Health check link */}
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '')}/health`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#4A00E0',
            borderRadius: '9999px',
            padding: '0.75rem 2rem',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            marginBottom: '1rem',
          }}
        >
          Check Backend Health →
        </a>
      </div>

      {/* Phase status */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[
          { label: 'Phase 1: Planning', done: true },
          { label: 'Phase 2: Infrastructure', done: true },
          { label: 'Phase 3: Auth', done: false },
          { label: 'Phase 4: Profiles', done: false },
        ].map(({ label, done }) => (
          <span
            key={label}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 500,
              background: done ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
              color: done ? '#ffffff' : 'rgba(255,255,255,0.5)',
              border: done ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {done ? '✓ ' : '○ '}{label}
          </span>
        ))}
      </div>
    </main>
  );
}
