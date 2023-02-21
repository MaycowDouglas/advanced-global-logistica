/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: 'hsla(0, 0%, 0%, 1)',
      'black-30': 'hsla(0, 0%, 0%, .3)',
      'black-70': 'hsla(0, 0%, 0%, .7)',
      white: 'hsla(0, 0%, 100%, 1)',
      transparent: 'transparent',
      neutral: {
        100: 'hsla(0, 0%, 98%, 1)',
        200: 'hsla(147, 33%, 94%, 1)',
        250: 'hsla(147, 33%, 94%, .5)',
        300: 'hsla(0, 0%, 77%, 1)',
        400: 'hsla(70, 3%, 43%, 1)',
        500: 'hsla(0, 0%, 23%, 1)',
        600: 'hsla(0, 0%, 8%, 1)',
      },
      green: {
        dark: {
          100: 'hsla(126, 42%, 82%, 1)',
          200: 'hsla(125, 28%, 57%, 1)',
          300: 'hsla(125, 38%, 35%, 1)',
          400: 'hsla(125, 48%, 23%, 1)',
          500: 'hsla(125, 67%, 12%, 1)',
        },
        light: {
          100: 'hsla(99, 61%, 84%, 1)',
          200: 'hsla(99, 51%, 73%, 1)',
          300: 'hsla(99, 54%, 63%, 1)',
          400: 'hsla(99, 42%, 47%, 1)',
          500: 'hsla(99, 84%, 11%, 1)',
        },
      },
      blue: {
        100: 'hsla(201, 27%, 73%, 1)',
        200: 'hsla(201, 74%, 24%, 1)',
        300: 'hsla(201, 93%, 11%, 1)',
        400: 'hsla(201, 100%, 7%, 1)',
        500: 'hsla(199, 100%, 3%, 1)',
      },
      red: {
        100: 'hsla(0, 74%, 76%, 1)',
        200: 'hsla(0, 64%, 60%, 1)',
        300: 'hsla(0, 62%, 44%, 1)',
        400: 'hsla(0, 68%, 34%, 1)',
        500: 'hsla(0, 88%, 23%, 1)',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    boxShadow: {
      sm: '2px 2px 8px rgba(0, 0, 0, 0.12)',
      md: '0px 6px 12px 1px rgba(0, 0, 0, 0.15)',
      lg: '0px 6px 20px -2px rgba(0, 0, 0, 0.18)',
      xl: '4px 4px 20px -2px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
