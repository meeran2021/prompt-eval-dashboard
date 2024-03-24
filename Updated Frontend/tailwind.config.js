/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '2px 4px 7.1px 0px rgba(0, 0, 0, 0.30)',
      },
      colors: {
        'custom-yellow-start': 'rgba(255, 213, 65, 0.20)',
        'custom-yellow-end': 'rgba(252, 196, 0, 0.20)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 213, 65, 0.20) 0%, rgba(252, 196, 0, 0.20) 100%)',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'Nunito Sans':[ "Nunito Sans", 'sans-serif'],
        'Inter':["Inter",'sans-serif'],
        'Manrope':['Manrope','sans-serif']
      },
      height:{
        'custom2': 'calc(100% - 2rem)'
      },
      width:{
        '20p':"20%",
        '80p':"80%",
        'customw':"calc(100vw-13vw)"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

