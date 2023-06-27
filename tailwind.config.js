/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
      
      backgroundImage: {
        'gradientGrey': 'linear-gradient(180deg, #1A1B1D 0%, #1A1B1D 100%)',
        'sea2': 'url("http://porschevolution.com/images/slides/2000.jpg")',
        'sea3': 'url("http://porschevolution.com/images/slides/2010.jpg")'
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
        fadeOut: "fadeOut 1.5s 1s ease-out forwards",
        fallFromTop: 'fallFromTop 1.2s ease-in-out',
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
        fallFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors:{
        clearWhite: '#f3f3f3',
        cream1: '#CECECE',
        cream2: '#D2D2D2',
        cream3: '#D5D5D5',
        bgblack: '#03050B',
        lightBlack: '#1E1E1E',
        cherry: '#D2042D',
        lightGreen: '#00E498',
        grey: '#696969',
      },
      fontFamily: {
        Assistant: "Assistant",
        Primary: "Assistant",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

