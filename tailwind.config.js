/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './_posts/**/*.md'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      raleway: 'Raleway',
      sans: 'Open Sans',
      montserrat: 'Montserrat',
    },
    extend: {
      colors: {
        primary: '#D2A877',
        'primary-text': '#FFFFFF',
        'secondary-text': '#5E727A',
        'tertiary-text': '#D9D9D9',
        'base-bg': '#00202E',
        neutral: '#022F43',
        success: '#04A0A0',
        error: '#A32655',
        'neutral-light': '#14455A',
        'primary-light': '#C9995B',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  variants: {},
  plugins: [require('daisyui')],
};
