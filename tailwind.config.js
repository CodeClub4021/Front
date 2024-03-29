import {nextui} from "@nextui-org/react";
// import daisyui from "daisyui";   // when someone need this add to plugins

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(navbar|snippet|code|input).js'

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}