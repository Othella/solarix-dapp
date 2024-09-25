import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'radix-blue': "var(--radix-blue)",
        'radix-pink': "var(--radix-pink)",
        'radix-green-1': "var(--radix-green-1)",
        'radix-green-2': "var(--radix-green-2)",
        'radix-green-3': "var(--radix-green-3)",
        'radix-blue-1': "var(--radix-blue-1)",
        'radix-blue-2': "var(--radix-blue-2)",
        'radix-blue-3': "var(--radix-blue-3)",
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMonoVF', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
