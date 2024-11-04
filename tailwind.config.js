/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["bodoni", "helvetice"],
      },

      screens: {
        mobile: "887px",
      },
    },
  },
  plugins: [],
};
