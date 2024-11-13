/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [""],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B3A8",
      },
    },
  },
  plugins: [],
};
