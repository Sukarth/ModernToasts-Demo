/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'toast-in': 'toast-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'toast-out': 'toast-out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'fill-progress': 'fill-progress var(--duration, 3s) linear forwards',
        'border-left-top': 'border-left-top var(--duration, 3s) linear forwards',
        'border-left-bottom': 'border-left-bottom var(--duration, 3s) linear forwards',
        'border-top': 'border-top var(--duration, 3s) linear forwards',
        'border-bottom': 'border-bottom var(--duration, 3s) linear forwards',
        'border-right-top': 'border-right-top var(--duration, 3s) linear forwards',
        'border-right-bottom': 'border-right-bottom var(--duration, 3s) linear forwards',
      },
      keyframes: {
        'toast-in': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
        'toast-out': {
          '0%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
        },
        'fill-progress': {
          '0%': { width: '0%' },
          '6%': { width: '0%' },
          '100%': { width: '150%' },
        },
        'border-top': {
          '0%': { width: '0%' },
          '10%': { width: '0%' },
          '70%': { width: '100%' },
          '100%': { width: '100%' },
        },
        'border-bottom': {
          '0%': { width: '0%' },
          '10%': { width: '0%' },
          '70%': { width: '100%' },
          '100%': { width: '100%' },
        },
        'border-left-top': {
          '0%': { height: '0%', top: '50%' },
          '15%': { height: '50%', top: '0%' },
          '100%': { height: '50%', top: '0%' },
        },
        'border-left-bottom': {
          '0%': { height: '0%', bottom: '50%' },
          '15%': { height: '50%', bottom: '0%' },
          '100%': { height: '50%', bottom: '0%' },
        },
        'border-right-top': {
          '0%': { height: '0%', top: '0%' },
          '70%': { height: '0%', top: '0%' },
          '85%': { height: '50%', top: '0%' },
          '100%': { height: '50%', top: '0%' },
        },
        'border-right-bottom': {
          '0%': { height: '0%', bottom: '0%' },
          '70%': { height: '0%', bottom: '0%' },
          '85%': { height: '50%', bottom: '0%' },
          '100%': { height: '50%', bottom: '0%' },
        }
      }
    },
  },
  plugins: [],
}