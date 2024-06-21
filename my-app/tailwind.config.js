/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(180deg, #F1F1EF 0%, rgba(241, 241, 239, 0.3) 100%)',
       
      },
    },
  },
}