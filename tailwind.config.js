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
        secondeColor: "#ffd100",
        accentColor: "#2ec4b6",
        textColor: "#ffffff",
      },
    },
  },
  plugins: [],
};
