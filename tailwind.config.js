// import {nextui} from "@nextui-org/react";
// import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(navbar|snippet|code|input).js'

  ],
  theme: {
    extend: {
      height: {
        700: "50rem"
      },
    }
    },
  darkMode: "class",
  plugins: []
}