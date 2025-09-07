/** @type {import('tailwindcss').Config} */
import formKitTailwind from "@formkit/themes/tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.ts",
    "./formkit.theme.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [formKitTailwind, daisyui],
}

