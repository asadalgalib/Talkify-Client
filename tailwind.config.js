/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-hero' : "url('/src/assets/bg.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "neutral": "#040605",
          "background": "#f3f4f6",
          "primary": "#59cfb3", //
          "secondary": "#4ac0de", //
          "accent": "#4370df",
          "base-100": "#ffffff",
          "info": "#ffffff",
        },
      },
      {
        dark: {
          "neutral": "#ffffff",
          "background": "#020302",
          "primary": "#1E1E1E", //
          "secondary": "#2197b5", //
          "accent": "#204cbc",
          "base-100": "#1E1E1E",
          "info": "#040605",
        },
      },
    ],
  },
}

