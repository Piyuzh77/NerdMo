/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          primary:'#53413c',
          secondaryLightMode:'#436A73',
          background:'#dcebf1',
          logo:'#0A0D0C'
       },
       fontFamily:{
          logoFont:['Sedan Sc','sans-serif']
       },
       fontWeight:{
        customBold:1000
       }
  },
  },
  plugins: [],
}

