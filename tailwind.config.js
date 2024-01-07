import daisyui from "daisyui";

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

    //   height: {
    //     700: "50rem"
    //   },
    // },
    //   fontFamily: {
    //     poppins: ["Poppins", "sans-serif"],
    //     dm: ["DM Sans", "sans-serif"],
    //   },
     
     
      

      fontFamily: {
        custom: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        custom: '#6e80b3d9',
      },
    },
  },
  daisyui: {
    themes: false
  },
  darkMode: "class",
  plugins: [daisyui]
}