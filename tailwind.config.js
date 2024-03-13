/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'main-color' : '#5D3AE9'
      },
      backgroundImage : {
        'hero-img-1' : "url('/assets/denise-jans-Lq6rcifGjOU-unsplash.jpg')",
        'hero-img-2' : "url('/assets/mason-kimbarovsky-X_d7m2r70bA-unsplash.jpg')",

      }
    },
  },
  plugins: [],
}

