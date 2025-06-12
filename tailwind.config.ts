
import type { Config } from "tailwindcss";
import { colors } from "./src/config/tailwind/colors";
import { typography } from "./src/config/tailwind/typography";
import { spacing } from "./src/config/tailwind/spacing";
import { animations } from "./src/config/tailwind/animations";
import { createComponentsPlugin } from "./src/config/tailwind/components";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...spacing,
      ...typography,
      ...animations,
      colors,
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents, theme }) {
      addComponents(createComponentsPlugin(theme));
    },
  ],
};

export default config;
