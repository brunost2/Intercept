/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "barra": "#373737",
        "cinza-escrita": "#8f8f8f",
        "preto-barra": "#272727",
        "escrita-branca": "#a1a1a1",
        "begee": "#f2f2ea",
        "branco": "#f2f2f0",
        "escritadn": "#d5d3c5",
        
        },
        spacing: {
          '5px': '18px',
          '2px': '156px',
          '55': '215px',
          '41': '159px',
          '555': '22px',
          '101010': '150px',
          '2020': '120px',
          '131313': '23px',
          '999': '140px',
          
        }
    },
  },
  plugins: [],
}

