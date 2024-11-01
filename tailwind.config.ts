import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#306BEB",
        dark: "#103783",
        light: "#FFFCFF",
      },
      animation: {
        'slide-from-left': 'from-left 600ms ease-in 300ms',
        'slide-from-right': 'from-right 600ms ease-in 100ms',
        'expand': 'expand 400ms ease-in-out 800ms',
      },
      keyframes: {
        'from-left': {
          '0%': { transform: 'translate(-150%, 0)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        'from-right': {
          '0%': { transform: 'translate(150%, 0)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        'expand': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'height': '0',
          'width': '0',
          'display': 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
      })
    }),
  ],
};
export default config;
