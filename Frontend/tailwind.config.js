const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container:{
      center: true,

    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        // 'just': ['Just Another Hand', 'sans-serif'],
        'shantell': ['Shantell Sans', 'cursive'],
      },
      colors:{
        prime: {
          500:'#8c52ff',
          600:'#8c52ff',
        },
        second: {
          500:'#9fffe4',
        },
      },
    },
  },
  plugins: [],
});