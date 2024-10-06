import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        greenColor: "#65E4A3",
        primaryColor: "#0A2640",
        greyColor: "#777777",
      },
    },
  },
  plugins: [],
};
export default config;
