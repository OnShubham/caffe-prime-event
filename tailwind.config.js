/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1e40af", // Replace with your desired hex code
        customPurple: "#7c3aed", // Replace with your desired hex code
        customRed: "#f43f5e", // Replace with your desired hex code
        customGrey: "#71717a", // Replace with your desired hex code
        lightPurple: "#e9d5ff", // Replace with your desired hex code
      },
    },
  },
  plugins: [],
};
