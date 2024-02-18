/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tali: "Protest Riot",
        roboto: "Roboto",
        open: "Open Sans",
        yell: "Yellowtail",
      },
      colors: {
        primary: "#274C5B",
        secondry: "#7EB693",
        yellow: "#EFD372",
        slate: "#D4D4D4",
        colorWt: "#F9F8F8",
        colorHt: "#EFF6F1",
        colorBk: "#525C60",
      },
    },
  },
  plugins: [],
};
