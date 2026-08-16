import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Default to English. Locale switching will be wired up in Phase 4.
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../i18n/${locale}.json`)).default,
  };
});
