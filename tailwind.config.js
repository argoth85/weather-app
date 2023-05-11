module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      backgroundImage: {
        gradientBg: "linear-gradient(to right bottom, #1efffb, #56fcef, #73f8e4, #89f4db, #9af0d4, #a0f1cc, #a7f2c4, #b0f2bc, #bbf6ab, #cbf898, #e0f984, #f9f871);",
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(3px, 0)',
          },
          '50%': {
            transform: 'translate(-3px, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        shake: 'shake 150ms 2 linear',
      },
    },
  },
  plugins: [],
};
