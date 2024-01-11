/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navPrimary: "#607b96",
        NavBorderColor: "#1e2d3d",
      },
      backgroundColor: {
        MainPrimary: "#011627",
      },
      fontFamily: {
        Fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
