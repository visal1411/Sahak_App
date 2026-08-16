import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SAHAK — Peer Learning & Mentorship for Cambodia',
    template: '%s | SAHAK',
  },
  description:
    'SAHAK connects Cambodian high school students with university student mentors for affordable, relatable academic support and career guidance.',
  keywords: ['tutoring', 'mentorship', 'Cambodia', 'SAHAK', 'peer learning', 'university', 'scholarship'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SAHAK',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;600;700&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
