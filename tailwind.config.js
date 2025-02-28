import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, autoprefixer],
};
