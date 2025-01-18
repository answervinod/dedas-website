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
        neon: {
          green: "#00FF94",
          blue: "#00C2FF",
          pink: "#FF3DFF",
          purple: "#9D50FF"
        }
      },
      scale: {
        '120': '1.2',
        '130': '1.3',
        '140': '1.4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-grid': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
        'gradient-primary': 'linear-gradient(90deg, #00FF94 0%, #00C2FF 100%)',
        'gradient-secondary': 'linear-gradient(90deg, #FF3DFF 0%, #9D50FF 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00C2FF 0%, #00FF94 100%)',
      },
    },
  },
  plugins: [],
}
