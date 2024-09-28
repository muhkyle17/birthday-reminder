/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // background: 'var(--background)',
        primary: {
          DEFAULT: '#0B0D17',
        },
        secondary: {
          DEFAULT: '#D0D6F9',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.typography-preset-one': {
          'font-family': 'Bellefair',
          'font-size': '144px',
          'line-height': '171.9%',
          'letter-spacing': '0px',
        },
      })
    },
  ],
}
