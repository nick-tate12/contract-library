/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,js}', './views/**/*.ejs', './public/**/*.html'],
  theme: {
    extend: {},
    colors: {
      offWhite: '#ECECEC',
      mainGreen: '#0B931A',
      mainYellow: '#D2D890',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
