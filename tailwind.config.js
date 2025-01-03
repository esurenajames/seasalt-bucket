/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
      },
      colors: {
        customOrange: '#F86F1A', 
        customWhite: '#FAF9F6'
      },
      transformOrigin: {
        'left': 'left',
      },
      scale: {
        '110-right': '1.1 1', // Horizontal scaling only
      },
    },
  },
  plugins: [],
}