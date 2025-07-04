/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        collegeBlue: "#0F214D",
        persianBlue: "#0B5FB0",
        middleBlue: "#AAFIFF",
        yellowBanana: "#EFEDCE",
        morningBlue: "#EBFCFF",
        pictonBlue: "#2BA3EC",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
