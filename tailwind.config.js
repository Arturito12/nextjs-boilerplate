/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/webpages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1196px",
        md: "810px",
        sm: "360px",
      },
      zIndex: {
        "-1": "-1",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dropInHorizontal: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        scaleIn: "scaleIn 1s ease-out",
        dropIn: "dropIn 1s ease-out",
        dropInHorizontal: "dropInHorizontal 1s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".underline-from-font": {
          "text-underline-position": "from-font",
        },
        ".decoration-skip-none": {
          "text-decoration-skip-ink": "none",
        },
      })
    },
  ],
}
