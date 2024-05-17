import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stdBgColor: '#111111',
        stdOrdinaryFontColor: '#D4D4D6',
        stdRadiantFontSize: '#D4D4D6',
      },
      fontSize: {
        stdOrdinaryFontSize: '20px',
        stdRadiantFontSize: '36px',
      },
    },
  },
  plugins: [],
}
export default config
