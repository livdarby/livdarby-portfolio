/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Playfair Display",
        marker: "Permanent Marker",
        body: "Open Sans",
        garamond: "Garamond",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": {
            transform: "rotate(180deg)",
          },
          "50%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 1s linear forwards",
      },
    },
  },
  plugins: [],
};
