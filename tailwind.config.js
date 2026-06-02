/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ucl: {
          navy: "#0a0f2e",
          blue: "#1a237e",
          gold: "#c9a84c",
          silver: "#a8a9ad",
          white: "#f0f0f0",
        }
      },
      fontFamily: {
        ucl: ["'Bebas Neue'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      }
    }
  },
  plugins: [],
}