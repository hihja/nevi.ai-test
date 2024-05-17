import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-active-sidebar-item": "linear-gradient(136deg, #dc5497 0%, #9063d1 100%)",
      },
      colors: {
        background: {
          DEFAULT: "#1B1B1C",
          dark: "#151515",
          gray: "#262626",
          nav: "#202020",
          select: "#262626",
        },
        muted: "#6F6F74",
        border: {
          gray: "#313131"
        }
      }
    },
  },
  plugins: [],
};
export default config;
