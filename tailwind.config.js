/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#353535',
        secondary: '#3c6e71',
        tertiary: '#d9d9d9',
        accent: '#284b63',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '2px': '2px',
        '7': '1.75rem',
        '72': '18rem',
      },
    },
  },
  plugins: [],
}

