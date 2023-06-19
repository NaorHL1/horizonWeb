/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./css/*.html'],
  theme: {
    extend: {
      direction: {
        'rtl': 'rtl',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
        fadeOut: "fadeOut 1.5s 1s ease-out forwards",
        variants: {
          animation: ["motion-safe"]
      }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
      },
      colors:{
        black: '#000000',
        black2: '#080808',
        black3: '#080A09',
        lightBlack: '#1E1E1E',
        cherry: '#D2042D',
        lightGreen: '#00E498',
      },
      fontFamily: {
        Assistant: "Assistant",
        Primary: "Assistant",
      },
    },
  },
  plugins: [],
}

