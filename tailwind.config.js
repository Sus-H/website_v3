/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "../styles/global.css",
  ],
  theme: {
    extend: {
      fontFamily: {
      lobster: ['Lobster Two', 'cursive'],
      inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}