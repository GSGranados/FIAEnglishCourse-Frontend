module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { raw: "(max-width: 768px)" },
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
    colors: {
      "wine-red": {
        100: "#ddcccc",
        200: "#bb9999",
        300: "#996666",
        400: "#773333",
        500: "#550000",
        600: "#440000",
        700: "#330000",
        800: "#220000",
        900: "#110000",
      },
      red: {
        100: "#f2d3d3",
        200: "#e6a7a7",
        300: "#d97c7c",
        400: "#cd5050",
        500: "#c02424",
        600: "#9a1d1d",
        700: "#731616",
        800: "#4d0e0e",
        900: "#260707",
      },
      yellow: {
        100: "#fff1cc",
        200: "#ffe399",
        300: "#ffd666",
        400: "#ffc833",
        500: "#ffba00",
        600: "#cc9500",
        700: "#997000",
        800: "#664a00",
        900: "#332500",
      },
      green: {
        100: "#cceeda",
        200: "#99deb5",
        300: "#66cd91",
        400: "#33bd6c",
        500: "#00ac47",
        600: "#008a39",
        700: "#00672b",
        800: "#00451c",
        900: "#00220e",
      },
      blue: {
        100: "#cce0f8",
        200: "#99c2f0",
        300: "#66a3e9",
        400: "#3385e1",
        500: "#0066da",
        600: "#0052ae",
        700: "#003d83",
        800: "#002957",
        900: "#00142c",
      },
      indigo: {
        100: "#dbcce6",
        200: "#b799cd",
        300: "#9366b4",
        400: "#6f339b",
        500: "#4b0082",
        600: "#3c0068",
        700: "#2d004e",
        800: "#1e0034",
        900: "#0f001a",
      },
      "white-text": {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333",
      },
      "gray-text": {
        100: "#dcdcdc",
        200: "#b8b8b8",
        300: "#959595",
        400: "#717171",
        500: "#4e4e4e",
        600: "#3e3e3e",
        700: "#2f2f2f",
        800: "#1f1f1f",
        900: "#101010",
      },
      black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
