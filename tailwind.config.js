/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center : true,
      padding : '16px'
    },
    extend: {
      colors: {
        "Kuning" : "#fab402",
        "agus" : "#050505",
        "Abu" : "#94a3b8",
        "Putih" : "#f7f7f7"
      },
      screens : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}