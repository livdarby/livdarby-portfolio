/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Playfair Display",
        marker: "Permanent Marker",
        body: "Open Sans",
        garamond: "Garamond"
      },
    },
  },
  plugins: [],
};
