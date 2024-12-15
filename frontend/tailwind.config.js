/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(100, 80, 194)",
        green: "rgb(107, 96, 166)",
        green_100: "#EEF8F2",
        gray_100: "rgb(138, 124, 201)",
        text: "rgb(145, 131, 203)",
      },
      boxShadow: {
        s1: "rgb(243, 238, 238) 0px 6px 24px 0px, rgb(241, 241, 241) 0px 0px 0px 1px;",
        s2: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        s3: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
  