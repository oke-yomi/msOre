/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general-sans)"],
      },
      screens: {
        "2md": "830px",
        "3xl": "1920px",
      },
      flex: {
        2: "0 0 0%",
      },
      colors: {
        "custom-purple-500": "#BA175E",
        "custom-green-400": "#1C4550",
        "custom-black": "#1E1E1E",
        "custom-grey": "#6E6D6D",
        "custom-neutral": "#626262",
        "custom-white": "#FCFCF8",
      },
      boxShadow: {
        '3xl': '0 0 0 1000px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
