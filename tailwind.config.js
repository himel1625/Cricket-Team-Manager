/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        pColor: "#131313B2",
        sColor:"#131313",
        bgColor: "#dfe4ea",
        buttonColor: "#E7FE29",
        fmColor: "#FFFFFF",
        fColor:"#06091A",
      },
    },
  },
  plugins: [require('daisyui')],
}
