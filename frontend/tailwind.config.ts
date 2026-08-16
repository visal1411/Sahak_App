/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Disable Tailwind preflight to avoid conflicts with MUI's CssBaseline.
  // MUI handles its own CSS reset. We add back only what we need via globals.css.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary indigo→violet gradient endpoints
          indigo: '#4A00E0',
          violet: '#8E2DE2',
          // Tinted backgrounds for sidebar active states
          light: '#F0EBFF',
          muted: '#E8E0FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(74, 0, 224, 0.08)',
        'card-hover': '0 6px 24px 0 rgba(74, 0, 224, 0.16)',
      },
    },
  },
  plugins: [],
};
