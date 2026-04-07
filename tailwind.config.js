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
