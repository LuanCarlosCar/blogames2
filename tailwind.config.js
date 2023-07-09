/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
  './src/pages/**/*.tsx',
  './src/components/**/*.tsx',
  './src/common/**/*.tsx'
],
  theme: {
    extend: {
      width: {
        '81': '22.5rem',
        '170':'72.5rem'
      },
      maxWidth: {
        '1/2': '50%',
      },
      height:{
        '120': '31.25rem',
       
      },
      colors: {
        'black-opa5': 'rgba(0, 0, 0, 0.5)',
      },

      boxShadow: {
        '3xl': 'inset 1.125rem -2.0625rem 2.625rem -1.0625rem black;',
      }
    },
  },
  plugins: [],
}

