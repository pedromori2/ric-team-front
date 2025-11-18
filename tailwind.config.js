/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#E50914',
          'red-dark': '#B8070F',
          'red-light': '#FF1A2B',
          black: '#0D0D0D',
          'black-light': '#1A1A1A',
        },
        secondary: {
          white: '#FFFFFF',
          'gray-metal': '#2E2E2E',
          'gray-light': '#B5B5B5',
          'gray-dark': '#1C1C1C',
        },
        accent: {
          yellow: '#FFD400',
          'yellow-dark': '#E6BF00',
          'yellow-light': '#FFF033',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(135deg, #E50914 0%, #FF1A2B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)',
        'gradient-metal': 'linear-gradient(135deg, #2E2E2E 0%, #1C1C1C 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0D0D0D 0%, #2E2E2E 25%, #0D0D0D 50%, #E50914 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #FFD400 0%, #FFF033 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}