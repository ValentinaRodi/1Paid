/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      'green': '#5CA514',
      'check': '#9595AE',
      'grey': '#CFD2EA',
      'red-error': '#FF5343',
    },
    fontFamily: {
      'font-prim': ['TTNorms-media', 'sans-serif'],
      'font-add': ['TTNorms-bold', 'sans-serif'],
    },
   
  },
};
export const plugins = [];
