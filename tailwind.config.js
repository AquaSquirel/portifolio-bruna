/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#F2FCF9',
          100: '#E6F9F3',
          200: '#BFEDE2',
          DEFAULT: '#99E0D0',
        },
        sand: {
          50: '#FDFBF7',
          100: '#FAF6ED', // Base background
          200: '#F2EBD9',
        },
        earth: {
          100: '#EBE5DE',
          200: '#D7CCC8',
          DEFAULT: '#A1887F',
          dark: '#5D4037', // Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
