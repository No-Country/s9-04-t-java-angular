/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'woco-blue': {
          1: '#015F75',
          2: '#0CA1C2',
          3: '#E6FAFF',
          4: '#F5FDFF',
        },
        'woco-green': {
          1: '#00754B',
          2: '#15C284',
          3: '#E5FFF6'
        },
        'woco-red': {
          1: '#C13515',
          2: '#EB674A',
          3: '#FFEBE5'
        },
      }
    },
  },
  plugins: [],
}

