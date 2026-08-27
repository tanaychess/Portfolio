/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0a0a0a",
          soft: "#0e0e0e",
          card: "#141414",
          card2: "#181818",
          border: "#252525",
        },
        gold: {
          50: "#fff9e6",
          100: "#fef0c2",
          200: "#fde28a",
          300: "#fdd158",
          400: "#fbbf24",
          DEFAULT: "#f2c14e",
          500: "#f2c14e",
          600: "#d9a52f",
          700: "#a87a1f",
          glow: "#ffe17d",
        },
        ink: {
          50: "#ffffff",
          100: "#f4f4f5",
          300: "#b4b4bb",
          400: "#8f8f97",
          500: "#6f6f77",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(120deg, #fbbf24 0%, #f2c14e 50%, #d9a52f 100%)",
        "noir-radial": "radial-gradient(circle at 15% 0%, rgba(242,193,78,0.10), transparent 40%), radial-gradient(circle at 85% 15%, rgba(242,193,78,0.06), transparent 45%)",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(0,0,0,0.65)",
        "glow-gold": "0 0 45px -8px rgba(242,193,78,0.45)",
        "glow-gold-sm": "0 0 22px -6px rgba(242,193,78,0.5)",
        "inner-line": "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-18px) rotate(1deg)" },
        },
        "float-rev": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-in": {
          from: { strokeDashoffset: 500 },
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-rev": "float-rev 7s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        wiggle: "wiggle 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        "draw-in": "draw-in 2.2s ease forwards",
      },
    },
  },
  plugins: [],
}
