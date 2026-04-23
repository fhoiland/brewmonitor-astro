/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brew-dark": "var(--brew-dark)",
        "brew-dark-soft": "var(--brew-dark-soft)",
        "brew-card": "var(--brew-card)",
        "brew-card-strong": "var(--brew-card-strong)",
        "brew-amber": "var(--brew-amber)",
        "brew-amber-light": "var(--brew-amber-light)",
        "brew-amber-soft": "var(--brew-amber-soft)",
        "brew-text": "var(--brew-text)",
        "brew-text-muted": "var(--brew-text-muted)",
        "brew-border": "var(--brew-border)",
        "brew-red": "var(--brew-red)",
        "brew-green": "var(--brew-green)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        headline: ["var(--font-headline)"],
      },
    },
  },
  plugins: [],
};
