import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: "#F1F2F4",
        customBlue: "#0A65CC",
      }
    },
  },
  plugins: [],
};
export default config;
