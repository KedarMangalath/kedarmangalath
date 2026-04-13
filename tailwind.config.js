/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        syne: ['var(--font-syne)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        bg: '#070707',
        surface: '#111111',
        primary: '#F0ECE2',
        cyan: '#FF4500', // Mapped to orange
        violet: '#D83D00', // Mapped to slightly darker orange
        amber: '#FF4500', // Mapped to orange
        green: '#FF4500', // Mapped to orange
        muted: '#2A2A2A',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}
