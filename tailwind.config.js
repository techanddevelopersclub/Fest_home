/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Cinzel', 'serif'],
        'sans': ['Lato', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'elegant': ['Cinzel', 'serif'],
        'body': ['Lato', 'sans-serif'],
        'subheading': ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
