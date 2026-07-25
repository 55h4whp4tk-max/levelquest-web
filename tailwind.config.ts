import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2340",
        inkDark: "#171933",
        parchment: "#F7EFDD",
        card: "#FFFCF5",
        cardBorder: "#ECE0C4",
        textPrimary: "#2A2A3C",
        textMuted: "#9A8F6E",
        trackBg: "#EADFC4",
        gold: "#E8A93A",
        coral: "#E8604C",
        moss: "#3E7D5C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        xl2: "28px",
      },
    },
  },
  plugins: [],
};

export default config;