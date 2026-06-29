/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8BBD0",
        secondary: "#FFD6E8",
        accent: "#FFF1F6",
      },

      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fade: "fade 1s ease-in-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },

        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },

        glow: {
          from: {
            boxShadow: "0 0 10px rgba(255,182,193,.4)",
          },
          to: {
            boxShadow: "0 0 30px rgba(255,182,193,.8)",
          },
        },
      },
    },
  },
  plugins: [],
};