/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0a0a0a',
        'electric-blue': '#2563eb',
        'vibrant-orange': '#f97316',
      },
    },
  },
  plugins: [],
}
