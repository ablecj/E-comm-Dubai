/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#fff9c4', // Light yellow color
      },
    },
  },
  plugins: [],
}