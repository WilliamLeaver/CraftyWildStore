import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      backgroundColor: '#DFE0DF',
      gradColor1: '#FFBE84',
      gradColor2: '#D47B0F',
      secondarylight: '#FFBE84',
      textlight: '#589747',
      textboldlight: '#008650',
    },
  },
  plugins: [],
}
export default config
