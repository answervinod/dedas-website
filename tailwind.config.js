/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF94",
        secondary: "#FF3DFF",
        dark: {
          DEFAULT: "#000000",
          100: "#0A0A0A",
          200: "#111111",
          300: "#171717",
        },
        accent: "#00C2FF",
      },
      scale: {
        '120': '1.2',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-grid': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
