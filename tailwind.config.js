module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      meroon: '#800000',
      green: '#00FF00',
      'royal-blue': '#4169e1',
      magenta: '#FF00FF',
      redish: '#FF0000',
      bea: '#19ECCC',
      orge: '#FFA500'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
