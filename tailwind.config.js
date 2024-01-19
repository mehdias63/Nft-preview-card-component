/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      outfid: ["Outfid"],
    },
    extend: {
      colors: {
        'dark-blue': '#15263F',
        'light-blue': '#8BACD9',
        'bright-cyan': '#00FFF8',
        // ... other custom colors
      }
    },
  },
  plugins: [],
}

