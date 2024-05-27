/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "0.9rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    options: {
      safelist: ["antialiased"], // Add 'antialiased' to the safelist
    },
    extend: {},
  },
  plugins: [],
};
