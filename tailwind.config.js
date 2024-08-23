/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "purple-bg": "#21092f",
      },
      backgroundImage: {
        "card-front": "url(/images/bg-card-front.png)",
        "card-back": "url(/images/bg-card-back.png)",
        "main-mobile-bg": "url(/images/bg-main-mobile.png)",
        "main-desktop-bg": "url(/images/bg-main-desktop.png)",
      },
      color: {
        "label-color": "#21092f",
      },
    },
  },
  plugins: [],
};
