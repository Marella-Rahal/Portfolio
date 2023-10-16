/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#ecf0f3",
        textColor: "#1f2937",
        effectColor: "rgb(255,0,0)",
        shadowColor: "#9ca3af",
        gradientFrom: "rgb(153,27,27)",
        gradientTo: "#ef4444",
      },
    },
  },
  plugins: [],
};
