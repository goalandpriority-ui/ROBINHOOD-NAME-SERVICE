import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0D0B",
        surface: "#121713",
        surface2: "#1A221C",
        border: "#233028",
        green: "#00C805",
        greenDim: "#00A804",
        red: "#FF5000",
        text: "#F4F7F4",
        mute: "#8A958D",
        mute2: "#5D655F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
