/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,js}', './views/**/*.ejs', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
