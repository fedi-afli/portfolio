/** @type {import('tailwindcss').Config} */
const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Theme colors are CSS variables (see index.css) so light/dark swap in one place.
      colors: {
        bg: withAlpha('--bg'),
        surface: withAlpha('--surface'),
        subtle: withAlpha('--subtle'),
        ink: withAlpha('--ink'),
        muted: withAlpha('--muted'),
        line: withAlpha('--line'),
        brand: withAlpha('--brand'),
        'brand-soft': withAlpha('--brand-soft'),
        accent: withAlpha('--accent'),
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blob: 'blob 18s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out both',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
