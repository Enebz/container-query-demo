const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    containerQuery: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      maxWidth: {
        "content": "1200px"
      },

      height: {
        "header": "var(--header-height)",
      },

      minHeight: {
        "header": "var(--header-height)"
      },

      inset: {
        "full-4": "calc(100% + 1rem)",
        "header": "var(--header-height)"
      },

      colors: {
        "primary": {
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-container-query'),
  ],
}
