// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smokePulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 30px 10px rgba(255, 165, 0, 0.3), inset 0 0 30px 10px rgba(255, 215, 0, 0.2)",
            transform: "rotate(0deg)",
          },
          "50%": {
            boxShadow:
              "0 0 60px 20px rgba(255, 215, 0, 0.5), inset 0 0 60px 20px rgba(255, 165, 0, 0.4)",
            transform: "rotate(1deg)",
          },
        },
      },
      animation: {
        smoke: "smokePulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
