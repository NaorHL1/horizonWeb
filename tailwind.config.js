/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');


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
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
        // other custom values...
      },
      backdropBrightness: {
        '75': 'brightness(0.75)',
        // other custom values...
      },
      backdropSaturate: {
        '70': 'saturate(0.7)',
        // other custom values...
      },
      backgroundImage: {
        'gradientGrey': 'linear-gradient(180deg, #1A1B1D 0%, #1A1B1D 100%)',
        'dna': 'url("img/dnaonce.gif")',
        'sea2': 'url("http://porschevolution.com/images/slides/2000.jpg")',
        'sea3': 'url("http://porschevolution.com/images/slides/2010.jpg")'
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
        fadeOut: "fadeOut 1.5s 1s ease-out forwards",
        fallFromTop: 'fallFromTop 1.2s ease-in-out',
        variants: {
          animation: ["motion-safe"],
          backdropFilter: ['responsive'],
          backdropBrightness: ['responsive'],
          backdropSaturate: ['responsive'],
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
        cream1: 'rgba(206, 206, 206, 1)',
        cream2: 'rgba(210, 210, 210, 1)',
        cream3: 'rgba(213, 213, 213, 1)',
        bgblack: '#070A13',
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
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
    require('tailwindcss-filters'),
  ],
}