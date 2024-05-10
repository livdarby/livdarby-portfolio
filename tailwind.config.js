/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        33: "5%",
      },
    },
  },
  plugins: [],
};
