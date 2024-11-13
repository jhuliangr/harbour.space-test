/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#685DC5',
      },
      fontFamily: {
        'apercu': ['Apercu Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

