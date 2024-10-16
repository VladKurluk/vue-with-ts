/** @type {import('tailwindcss').Config} */
import formKitTailwind from "@formkit/themes/tailwindcss";

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
  plugins: [formKitTailwind],
}

