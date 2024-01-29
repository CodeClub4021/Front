import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        custom: "#edf415",
      },
    },
  },
  daisyui: {
    themes: false,
    prefix: "daisy"
  },
  darkMode: "class",
  plugins: [daisyui]
};
