import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-light": "var(--accent-light)",
        dark: "var(--dark)",
        "dark-soft": "var(--dark-soft)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 23, 25, 0.12)",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [forms],
};

export default config;
