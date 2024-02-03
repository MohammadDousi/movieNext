/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeryColor: "#202020",
        primeryColorDarker: "#151515",
        primeryColorlighter: "#2D2D2D",
        secondeColor: "#ffd100",
        accentColor: "#2ec4b6",
        textColor: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          // ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ffd100",
          secondary: "#ffffff",
          // "--rounded-btn": "10rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--animation-btn": "10.25s", // duration of animation when you click on button
          // "--border-btn": ".5px", // border width of buttons
          // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-input": "10.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
