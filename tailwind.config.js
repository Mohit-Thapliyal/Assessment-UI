/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1C4980",
      stroke: "#8DA4BF",
      "stroke-light": "#DADCE0",
      blue: "#0073E6",
      "blue-accent": "#E5F1FC",
      "blue-accent-light": "#F2F8FE",
      "blue-accent-lighter": "#F6F8FA",
      red: "#D63500",
      "red-accent": "#FBEBEA",
      purple: "#6548EE",
      "purple-accent": "#EBE8FD",
      pink: "#E9407A",
      "pink-accent": "#FCE8FD",
      green: "#05C165",
      white: "#FFFFFF",
      black: "#000",
      transparent: "transparent"
    },
    extend: {},
  },
  plugins: [],
};
