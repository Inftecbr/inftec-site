/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#080a0d',
        'bg-primary': '#0e1116',
        'bg-secondary': '#151a22',
        'bg-surface': '#1b1f27',
        'bg-elevated': '#222830',
        border: 'rgba(255, 255, 255, 0.06)',
        'border-strong': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#e6e8eb',
        'text-secondary': '#8f9aa6',
        'text-muted': '#5c6773',
        accent: '#c05621',
        'accent-hover': '#a3471a',
        data: '#38bdf8',
        'data-dim': '#0ea5e9',
        success: '#34d399',
        warning: '#fbbf24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
