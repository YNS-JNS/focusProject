// const plugin = require('tailwind-scrollbar');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [ 
    // require('tailwind-scrollbar') 
  ],
  variants: {
    // scrollbar: ['rounded'],
  }
}