/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#171825',
        'secondary-bg': '#2C2D3D',
        'primary-text': '#EAEBF1',
        'accent-blue': '#3A75EB',
        'accent-green': '#8BE8A3',
        'subtle-gray': '#6F7285',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};