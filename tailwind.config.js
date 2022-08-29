module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screen: {
      md: '768px',
      lg: '992px',
    },
    container: {
      center: true,
      padding: '12px',
    },
    fontSize: {
      sm: ['14px', '1.5'],
      base: ['16px', '1.5'],
      lg: ['18px', '1.5'],
      xl: ['20px', '1.5'],
      '2xl': ['24px', '1.5'],
      '3xl': ['32px', '1.5'],
      '4xl': ['36px', '1.5'],
      '5xl': ['48px', '1.5'],
      '6xl': ['64px', '1.5'],
      '7xl': ['80px', '1.5'],
    },
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      "home-header-sm": "url('../images/home-header-sm.png')",
      "home-header": "url('../images/home-header.png')",
      "index-bg": "url('../images/index-bg.png')",
      "index-bg-md": "url('../images/index-bg-md.png')",
      "index-bg-sm": "url('../images/index-bg-sm.png')",
    },
    extend: {
      colors: {
        'maroon': {
          'light': '#FBF2F2',
          DEFAULT: '#AA0601',
          'dark': '#650300',
        },
        'brown':{
          "light" : "#B75929",
          "dark": "#5F3E2D",
        }
      },

    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '372px',
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '1320px',
          }
        }
      })
    }
  ],
}