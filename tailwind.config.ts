import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: '#0D0D0D',
        surface: '#1C1C1C',
        accent: '#C0504D',
        steel: '#7F8C8D',
        light: '#F0EDE8',
        text: {
          DEFAULT: '#F0EDE8',
          muted: '#9A9590',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
