/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-cover': "url('/src/assets/images/back2.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
