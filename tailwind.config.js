const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#06080f",
        secondary: "#0b0f1a",
        accent: "#f13024",
        matte: "#0c0c0c",
        neon: "#9cff00",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        blackgf: 'url("/black.gif")',
        skills: 'url("/skills-bg.svg")',
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...defaultTheme.fontFamily.sans],
        display: ["Elianto", "var(--font-sora)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        spotlight: "spotlight 1.8s ease .6s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      boxShadow: {
        inner: "inset 0 -2px 4px 2px rgb(0 0 0 / 0.05)",
        glow: "0 0 0 1px rgb(241 48 36 / 0.45), 0 18px 40px rgb(241 48 36 / 0.16)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
}
