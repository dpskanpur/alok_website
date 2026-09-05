import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        bw: {
          white: "#ffffff",
          offwhite: "#fafafa",
          subtle: "#f4f4f5",
          border: "#e4e4e7",
          borderDark: "#18181b",
          muted: "#71717a",
          dark: "#27272a",
          black: "#000000",
        },
        cloud: {
          gcp: {
            blue: "#4285F4",
            red: "#EA4335",
            yellow: "#FBBC05",
            green: "#34A853",
            subtle: "#E8F0FE",
          },
          aws: {
            orange: "#FF9900",
            squid: "#232F3E",
            subtle: "#FFF4E5",
          },
          azure: {
            blue: "#0078D4",
            dark: "#002456",
            subtle: "#EFF6FC",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "SF Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
