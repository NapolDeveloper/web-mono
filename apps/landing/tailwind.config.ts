import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Partial<Config> = {
  content: ['./src/app/**/*.tsx', './src/components/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        GMarket: ['GMarket', 'sans-serif'],
      },
      screens: {
        mobile: { max: '639px' },
        tablet: { min: '640px', max: '1199px' },
        pc: { min: '1200px' },
      },
    },
  },
} as const;

export default config;
