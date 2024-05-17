/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
       
    }
    },
  },
  plugins: [ require('tailwindcss-animated'),],
};
