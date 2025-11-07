/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Match your current setup
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          'light': '#4285F4',
          'dark': '#8ab4f8'
        },
        'background': {
          'light': '#f8f9fa',
          'dark': '#202124'
        },
        'surface': {
          'light': '#ffffff',
          'dark': '#303134'
        },
        'on-surface': {
          'light': '#202124',
          'dark': '#e8eaed'
        },
        'on-surface-variant': {
          'light': '#5f6368',
          'dark': '#969ba1'
        },
        // Content type colors for case study sections
        'accent-goals': '#3b82f6',      // Blue
        'accent-solution': '#10b981',   // Emerald
        'accent-metrics': '#8b5cf6',    // Purple
        'accent-process': '#06b6d4',    // Cyan
        'accent-architecture': '#14b8a6', // Teal
        'accent-testing': '#f59e0b',    // Amber
        'accent-challenges': '#ef4444', // Red
        'accent-results': '#22c55e',    // Green
        // Tech stack badge colors
        'badge-react': '#61dafb',
        'badge-typescript': '#3178c6',
        'badge-javascript': '#f7df1e',
        'badge-tailwind': '#06b6d4',
        'badge-vite': '#646cff',
        'badge-playwright': '#2eaa5e',
        'badge-vercel': '#000000',
        'badge-figma': '#f24e1e',
        'badge-wix': '#faad4a',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    }
  },
  plugins: [],
}

