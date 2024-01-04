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
        "2xl": "1080px",
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
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        lg: "0px 4px 6px -2px rgba(31, 76, 149, 0.03), 0px 12px 16px -4px rgba(31, 76, 149, 0.08)",
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
    require("tailwindcss-animate"),
  ],
};
