/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'ms': '1100px',
        'xxxs': '1170px',
        'xxs': '1250px',
        'xs': '1320px',
        's': '1390px',
        'md': '1470px',
        'lg': '1540px',
        'xl': '1620px',
        '2xl': '1700px',
        '3xl': '1767px',
        '4xl': '1819px',          
        '5xl': '1891px',

        // slogan
        'ss':'632px',

        // dash 
        'dms': '640px',
        'dxxxs': '0px',
        'dxxs': '1090px',
        'dxs': '1170px',
        'ds': '1250px',
        'dmd': '1335px',
        'dlg': '1425px',
        'dxl': '1520px',
        'd2xl': '1610px',
        'd3xl': '1695px',
        'd4xl': '1780px',          
        'd5xl': '1889px',
        
        // 'tall': { 'raw': '(min-height: 800px)' }, // Custom height-based media query
        // You can even do max-width or orientation:
        'portrait': { 'raw': '(orientation: portrait)' },
      },
    },
  },
  plugins: [],
}