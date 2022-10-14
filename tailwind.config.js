/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vs: '280px',
      xs:'375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        bgColor:'#ecf0f3',
        navBgColor:'rgba(236,240,243,0.6)',
        textColor:'#1f2937',
        effectColor:'rgb(255,0,0)',
        shadowColor:'#9ca3af',
        gradientFrom:'rgb(153,27,27)',
        gradientTo:'#ef4444',
      },
    },
  },
  plugins: [],
}
