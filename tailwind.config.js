module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './public/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { body: ['Poppins', 'sans-serif'] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
