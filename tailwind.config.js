/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#010000',
        'black-medium': '#202124',
        'gray-medium': '#787876',
        'gray-light': '#eef4f6'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
