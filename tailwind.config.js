/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text1: "var(--text1)",
        text2: "var(--text2)",
        background: "var(--background)",
        accent: "var(--accent)",
        button: "var(--button)",
      }
    },
  },
  plugins: [],
}

