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
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}

