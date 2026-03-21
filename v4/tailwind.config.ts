import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",
      },
    },
    extend: {
      /* ======================
         TYPOGRAPHY
      ====================== */
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

      /* ======================
         COLORS (TOKENIZED)
      ====================== */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          soft: "hsl(var(--accent-soft))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* Executive palette */
        navy: {
          DEFAULT: "hsl(var(--navy))",
          deep: "hsl(var(--navy-deep))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          hover: "hsl(var(--sage-hover))",
          soft: "hsl(var(--sage-soft))",
        },
        beige: {
          DEFAULT: "hsl(var(--beige))",
          warm: "hsl(var(--beige-warm))",
        },
        olive: "hsl(var(--olive))",
        cream: "hsl(var(--cream))",
        "executive-gold": "hsl(var(--executive-gold))",
      },

      /* ======================
         GRADIENT SYSTEM (FIX)
      ====================== */
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg, hsl(204 12% 33%) 0%, hsl(36 10% 40%) 100%)",
        "gradient-card":
          "linear-gradient(145deg, hsl(190 20% 90%) 0%, hsl(190 15% 75%) 100%)",
        "gradient-hero":
          "linear-gradient(135deg, hsl(40 20% 96%) 0%, hsl(38 25% 88%) 45%, hsl(38 30% 82%) 100%)",
      },

      /* ======================
         RADII
      ====================== */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },

      /* ======================
         SHADOWS
      ====================== */
      boxShadow: {
        "executive-sm": "0 2px 8px rgba(76, 87, 96, 0.06)",
        executive: "0 8px 24px rgba(76, 87, 96, 0.08)",
        "executive-lg": "0 20px 60px rgba(76, 87, 96, 0.1)",
        "executive-xl": "0 30px 80px rgba(76, 87, 96, 0.12)",
        glow: "0 0 60px rgba(147, 168, 172, 0.2)",
      },

      /* ======================
         MOTION
      ====================== */
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-slide": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        progress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-slide": "fade-slide 0.7s ease-out forwards",
        progress: "progress 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
