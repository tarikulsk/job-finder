/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8be8d7",

          "secondary": "#fff2c9",

          "accent": "#da00fc",

          "neutral": "#2A233E",

          "base-100": "#f3f4f6",

          "info": "#649FED",

          "success": "#25B15D",

          "warning": "#FCAD45",

          "error": "#F22663",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

