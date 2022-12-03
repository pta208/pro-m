/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bebecook: "rgb(31,59,120)",
        primary: "rgb(154, 220, 255)",
        secondary: "rgb(255, 248, 154)",
        third: "rgb(255, 178, 166)",
        forth: "rgb(255, 138, 174)",
        "pink-salmon": {
          50: "#fff1f5",
          100: "#ffe3ea",
          200: "#ffccdb",
          300: "#ff8aae",
          400: "#fe6e9e",
          500: "#f83b7e",
          600: "#e5196c",
          700: "#c20e5b",
          800: "#a20f53",
          900: "#8b104d",
        },
        "bay-of-many": {
          50: "#f0f7fe",
          100: "#dcecfd",
          200: "#c2defb",
          300: "#97caf9",
          400: "#66aef4",
          500: "#438dee",
          600: "#2d70e3",
          700: "#255bd0",
          800: "#244aa9",
          900: "#1f3b78",
        },
        jacarta: {
          50: "#efeffe",
          100: "#e1e1fe",
          200: "#cbcafb",
          300: "#ada9f8",
          400: "#9687f2",
          500: "#856aea",
          600: "#774dde",
          700: "#673fc3",
          800: "#54359e",
          900: "#3f2d71",
        },
        "blaze-orange": {
          50: "#fff8ec",
          100: "#fff0d3",
          200: "#ffdda5",
          300: "#ffc46d",
          400: "#ff9f32",
          500: "#ff820a",
          600: "#ff6900",
          700: "#cc4b02",
          800: "#a13a0b",
          900: "#82320c",
        },
      },
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "rgb(154, 220, 255)",

  //         secondary: "rgb(255, 248, 154)",

  //         accent: "rgb(255, 178, 166)",

  //         neutral: "rgb(255, 138, 174)",

  //         "base-100": "#E6E3E8",

  //         info: "#657EE2",

  //         success: "#22c55e",

  //         warning: "#eab308",

  //         error: "#b91c1c",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("tailwind-scrollbar")],
};
