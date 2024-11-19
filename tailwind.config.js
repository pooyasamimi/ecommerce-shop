/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
      },
    },

    extend: {
      screens: {
        400: '400px',
      },
      colors: {
        'orange-primary': 'rgb(255,73,31)'
      },
      fontFamily: {
        vazirBlack: ['Vazir-Black', 'system-ui'],
        vazirBold: ['Vazir-Bold', 'system-ui'],
        vazirExtraBold: ['Vazir-ExtraBold', 'system-ui'],
        vazirExtraLight: ['Vazir-ExtraLight', 'system-ui'],
        vazirLight: ['Vazir-Light', 'system-ui'],
        vazirMedium: ['Vazir-Medium', 'system-ui'],
        vazirRegular: ['Vazir-Regular', 'system-ui'],
        vazirSemiBold: ['Vazir-SemiBold', 'system-ui'],
        vazirThin: ['Vazir-Thin', 'system-ui'],
        perNumBold: ['PerNum-Bold', 'system-ui'],
      }
    },
  },
  plugins: [],
};


