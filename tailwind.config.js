/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.550rem",
      "5xl": "3.052rem",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      colors: {
        "regal-blue": "#3772FF",
        "regal-gray": "#E6E8EC",
        "regal-darkgray": "#777E90",
        "regal-bggray": "#23262F",
        "regal-header": "#B1B5C3",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
