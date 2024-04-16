/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "light-card":'24px 24px 40px #efefff,-24px -24px 50px #efefff'
      }
    },
  },
  plugins: [],
}