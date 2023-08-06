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
        "custom-green-500": "#0F242A",
        "custom-green-400": "#1C4550",
        "custom-yellow-500": "#CFF335",
        "custom-yellow-300": "#F8FDE2",
        "custom-black": "#1E1E1E",
        "custom-grey": "#6E6D6D",
        "custom-neutral": "#626262",
        "custom-white": "#FCFCF8",
        "custom-offwhite": "#E6E6CB",
      },
    },
  },
  plugins: [],
};
