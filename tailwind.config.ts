import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: {
          Moderateblue: "hsl(238, 40%, 52%)",
          SoftRed: "hsl(358, 79%, 66%)",
          LightGrayishBlue: "hsl(239, 57%, 85%)",
          PaleRed: "hsl(357, 100%, 86%)",
        },
        Neutral: {
          DarkBlue: "hsl(212, 24%, 26%)",
          GrayishBlue: "hsl(211, 10%, 45%)",
          LightGray: "hsl(223, 19%, 93%)",
          VeryLightGray: "hsl(228, 33%, 97%)",
          White: "hsl(0, 0%, 100%)",
        },
        fontSize: {
          base: "16px",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
