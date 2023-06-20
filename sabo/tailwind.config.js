/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general-sans)"],
      },
      screens: {
        "2md": "830px",
      },
      colors: {
        "custom-lightgreen": "#E8F9E8",
        "custom-darkgreen": "#B0EAB0",
        "custom-black": "#1E1E1E",
        "custom-textgray": "#626262",
        "custom-neutral": "#4B4B4B",
      },
      boxShadow: {
        "3xl": "0px 2px 26px rgba(0, 0, 0, 0.06)",
      },
      gridTemplateColumns: {
        "4x": "repeat(4, minmax(220px, 300px))",
      },
    },
  },
  plugins: [],
};
