/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9fedb3',
        primaryBack: '#E5F1E3',
        secondary: '#3C374E',
        back: '#F6FAF8',
        success: '#198c07',
        successDark: '#16a34a',
        danger: '#ED6D6C',
        text: '#2B2C2B',
        customeBlue: '#95C0F2',
        customeYellow: '#FADD92',
        customePink: '#EB9DB3',
        // customeGreen: '#95EDB3',
        // customeRed: '#ED6D6C',
        // customePurple: '#959ED7',
        // customeOrange: '#F59E0B',
        // customeBrown: '#959ED7',
      },
    },
  },
  plugins: [],
};
