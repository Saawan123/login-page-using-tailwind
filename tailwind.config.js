/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '991px',  // Set the medium breakpoint to 991px
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  mode: 'jit',
  plugins: [require("@tailwindcss/typography")],
};
