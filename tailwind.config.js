/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        // Light theme colors
        light: {
          background: "#f8fafc",
          foreground: "#0f172a",
          primary: "#3b82f6",
          secondary: "#6366f1",
          accent: "#8b5cf6",
          muted: "#94a3b8",
        },
        // Dark theme colors
        dark: {
          background: "#0f172a",
          foreground: "#f8fafc",
          primary: "#60a5fa",
          secondary: "#818cf8",
          accent: "#a78bfa",
          muted: "#64748b",
        },
        // Akatsuki theme colors (red and black)
        akatsuki: {
          background: "#0a0a0a",
          foreground: "#f1f5f9",
          primary: "#dc2626",
          secondary: "#b91c1c",
          accent: "#7f1d1d",
          muted: "#4b5563",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        floatUp: "floatUp linear infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { opacity: "0.7" },
          "100%": { transform: "translateY(-120vh)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
