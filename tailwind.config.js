/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,css}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    extend: {
      borderRadius: {
        primary: "var(--primary-border-radius)",
      },
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        error: {
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#f9b4af",
          300: "#f68f88",
          400: "#f36960",
          500: "#f04438",
          600: "#D92D20",
          700: "#902922",
          800: "#601b16",
          900: "#300e0b",
        },
        warning: {
          50: "#FFFAEB",
          100: "#fde9ce",
          200: "#fcd39d",
          300: "#fabc6b",
          400: "#f9a63a",
          500: "#f79009",
          600: "#c67307",
          700: "#B54708",
          800: "#633a04",
          900: "#311d02",
        },
        success: {
          50: "#effdf3",
          100: "#D1FADF",
          200: "#a0e2c3",
          300: "#71d4a6",
          400: "#41c588",
          500: "#12b76a",
          600: "#039855",
          700: "#0b6e40",
          800: "#07492a",
          900: "#042515",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          800: "#1D2939",
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02rem" }],
        "5xl": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.02rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.02rem" }],
        "7xl": ["4.5rem", { lineHeight: "5.625rem", letterSpacing: "-0.02rem" }],
      },
      dropShadow: {
        sm: "0px 1px 3px rgba(64, 64, 64, 0.1)",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        lg: "0px 4px 6px -2px rgba(31, 76, 149, 0.03), 0px 12px 16px -4px rgba(31, 76, 149, 0.08)",
        xl: "0px 8px 8px -4px rgba(31, 76, 149, 0.03), 0px 20px 24px -4px rgba(31, 76, 149, 0.08)",
      },
      custom_reset_css: {
        ul: "m-0 p-0 list-none",
        li: "m-0 p-0",
        ol: "m-0 p-0 list-decimal",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1170px",
          },
          "@screen 2xl": {
            maxWidth: "1250px",
          },
        },
      })
    },
  ],
};
