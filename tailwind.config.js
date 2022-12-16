/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'icon-view': "url('/images/icon-view.svg')"
      }
    },
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%)',
      'cyan-with-opacity': 'hsla(178, 100%, 50%, 0.6)',
      'very-dark-blue-main': 'hsl(217, 54%, 11%)',
      'very-dark-blue-card': 'hsl(216, 50%, 16%)',
      'very-dark-blue': 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      outfit: ['Outfit']
    }
  },
  plugins: []
}
