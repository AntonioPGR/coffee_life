import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx}",
  ],
  theme: {
    colors: {
      bg: {
        100: '#FAF9F3',
        500: '#8C5042',
        800: '#592C28',
      },
      text: {
        100: '#FAF9F3',
        500: '#8C5042',
        800: '#592C28',
      }
    },
    fontFamily: {
      hero: ['Kurale', 'handwrite'],
      text: ['Lustria', 'serif'],
      button: ['Urbanist', 'sans-serif']
    }
  },
  plugins: [],
}
export default config
