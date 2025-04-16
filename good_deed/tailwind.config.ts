import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        primary: {
          DEFAULT: "#4A90E2", // Light blue
          dark: "#3A7BC8",
          light: "#C8E1FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E27285", // Pink/reddish
          dark: "#D15A6D",
          light: "#FFD6DD",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#9B6ED6", // Purple accent
          foreground: "#FFFFFF",
        },
        background: "#FFFFFF",
        foreground: "#333333",
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#6B7280",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        border: "#E5E7EB",
      },
      fontSize: {
        // Larger text for better readability for seniors
        base: '1.05rem',
        lg: '1.2rem',
        xl: '1.35rem',
        '2xl': '1.6rem',
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
