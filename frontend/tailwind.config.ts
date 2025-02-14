import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom primary color
        secondary: "#22C55E", // Custom secondary color
        accent: "#FACC15", // Accent color
        dark: "#1E1E2E", // Dark mode color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font
        serif: ["Merriweather", "serif"], // Serif font
      },
    },
  },
  plugins: [],
};

export default config;
