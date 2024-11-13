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
        customNavtext: "#5E6670",
        customBorderLight: "#CEE0F5",
      }
    },
  },
  plugins: [],
};
export default config;
