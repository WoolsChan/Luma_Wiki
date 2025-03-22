import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ul: {
              "list-style-type": "disc",
              "margin-left": "1.5rem",
            },
            ol: {
              "list-style-type": "decimal",
              "margin-left": "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
