/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: {
            opacity: 0,
            transform: "translateY(-30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideIn300: "slideIn 1s ease 300ms forwards",
        slideIn500: "slideIn 1s ease 500ms forwards",
        slideIn700: "slideIn 1s ease 700ms forwards",
      },
    },
  },
  plugins: [],
};
