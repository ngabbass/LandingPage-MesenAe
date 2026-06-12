/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'rgb(var(--color-bg-base))',
          deep: 'rgb(var(--color-bg-deep))',
          card: 'rgb(var(--color-bg-card))',
          'card-hover': 'rgb(var(--color-bg-card-hover))',
          glass: 'rgba(var(--color-bg-card), 0.7)',
          'glass-light': 'rgba(var(--color-border-default), 0.04)',
        },
        brand: {
          amber: 'rgb(var(--color-brand-amber))',
          'amber-light': 'rgb(var(--color-brand-amber-light))',
          'amber-dim': 'var(--color-brand-amber-dim)',
          'amber-glow': 'var(--color-brand-amber-glow)',
          emerald: '#10B981',
          'emerald-dim': 'rgba(16,185,129,0.15)',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        text: {
          primary: 'rgb(var(--color-text-primary))',
          secondary: 'rgb(var(--color-text-secondary))',
          muted: 'rgb(var(--color-text-muted))',
          amber: 'rgb(var(--color-brand-amber))',
        },
        border: {
          DEFAULT: 'var(--color-border-raw)',
          amber: 'var(--color-border-amber)',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)',
        amber: '0 0 40px rgba(59, 130, 246, 0.2)',
      }
    },
  },
  plugins: [],
}
