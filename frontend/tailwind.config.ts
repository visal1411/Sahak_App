import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "surface-container": "#f2ecf4",
        "on-primary-fixed-variant": "#0369a1", 
        "on-surface": "#1d1b20",
        "surface-tint": "#0ea5e9",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#ded8e0",
        "surface-container-low": "#f8f2fa",
        "tertiary-fixed-dim": "#e7c365",
        "background": "#fdf7ff",
        "inverse-surface": "#322f35",
        "secondary-container": "#e1d4fd",
        "on-background": "#1d1b20",
        "secondary-fixed-dim": "#cdc0e9",
        "primary": "#0ea5e9", // Mapped to sky-500
        "on-secondary-fixed-variant": "#4b4263",
        "inverse-primary": "#bae6fd", // Mapped to sky-200
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f5eff7",
        "on-tertiary-container": "#503d00",
        "error-container": "#ffdad6",
        "outline-variant": "#cbc4d2",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#1f1635",
        "surface": "#fdf7ff",
        "on-surface-variant": "#494551",
        "primary-fixed": "#e0f2fe", // Mapped to sky-100
        "on-error": "#ffffff",
        "surface-bright": "#fdf7ff",
        "outline": "#7a7582",
        "primary-fixed-dim": "#7dd3fc", // Mapped to sky-300
        "secondary": "#63597c",
        "secondary-fixed": "#e9ddff",
        "surface-variant": "#e6e0e9",
        "on-primary-fixed": "#0c4a6e", // Mapped to sky-900
        "primary-container": "#e0f2fe", // Mapped to sky-100
        "on-secondary-container": "#645a7d",
        "on-tertiary-fixed-variant": "#594400",
        "tertiary": "#765b00",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#ece6ee",
        "on-tertiary-fixed": "#241a00",
        "error": "#ba1a1a",
        "on-primary-container": "#0369a1", // Mapped to sky-700
        "tertiary-container": "#c9a74d",
        "tertiary-fixed": "#ffdf93",
        "surface-container-highest": "#e6e0e9",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "card-gap": "24px",
        "unit": "8px",
        "section-margin": "64px",
        "container-padding-desktop": "40px",
        "container-padding-mobile": "20px"
      },
      fontFamily: {
        "display-lg": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "stat-display": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Space Grotesk", "sans-serif"],
        "label-caps": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "stat-display": ["20px", { "lineHeight": "1", "fontWeight": "600" }],
        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      },
      keyframes: {
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(14, 165, 233, 0)' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9', boxShadow: '0 0 15px 2px rgba(14, 165, 233, 0.3)' },
        }
      },
      animation: {
        'soft-pulse': 'soft-pulse 2s ease-in-out infinite',
      },
      boxShadow: {
        'brand-card': '0 4px 20px -2px rgba(14, 165, 233, 0.1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};

export default config;
