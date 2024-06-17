/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "font-color": "var(--font-color)",
        "font-sub-color": "var(--font-sub-color)",
        "bg-nav": "var(--bg-nav)",
        "border-color": "var(--border-color)",
        "hover-color": "var(--hover-color)",
        "facebook-color": "var(--facebook-color)",
        "twitter-color": "var(--twitter-color)",
        "instagram-color": "var(--instagram-color)",
        "linkedin-color": "var(--linkedin-color)",
        "github-color": "var(--github-color)",
        "whatsapp-color": "var(--whatsapp-color)"
      },
      animation: {
        openNav: "openNav .77s 1 ease-in-out",
        morph: "morph 8s ease-in-out infinite",
        closeNav: "closeNav .77s ease-in-out",
      },
      keyframes: {
        openNav: {
          "0%": {
            transform: "scale(0)",
          },
          "60%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        morph: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        closeNav: {
          "0%": {
            transform: "scale(1)",
          },
          "60%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
