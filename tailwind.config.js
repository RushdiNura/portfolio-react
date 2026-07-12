/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070c',
          900: '#0a0e16',
          800: '#0f1420',
          700: '#161d2c',
          600: '#202a3d',
          500: '#334158',
        },
        mist: {
          400: '#7c8aa3',
          300: '#9aa7bd',
          200: '#c4cbda',
          100: '#e7eaf1',
        },
        signal: {
          blue: '#2563eb',
          blueSoft: '#3b76f0',
          cyan: '#22d3ee',
          cyanSoft: '#67e8f9',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(148,163,184,0.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.65)',
        lift: '0 24px 48px -20px rgba(37,99,235,0.35)',
      },
      keyframes: {
        caret: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        caret: 'caret 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
