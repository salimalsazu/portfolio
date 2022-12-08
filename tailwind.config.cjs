/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#803fc1",
        
"secondary": "#ea3ac1",
        
"accent": "#99efaa",
        
"neutral": "#241B27",
        
"base-100": "#151515",
        
"info": "#7C96F4",
        
"success": "#7AEBAD",
        
"warning": "#CDA213",
        
"error": "#E7325C",
        },
      },
    ],
  },

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
