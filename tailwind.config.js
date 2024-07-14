/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
// import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./*.{html,js}", "./pages/*.html"],
  theme: {
    fontFamily: {
      heading400: "var(--font-heading-400)",
      primary: "var(--font-primary)",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1536px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#131426",
        black1: "#292F36",
        white1: "#F4F0EC",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] px-5 md:px-10 lg:px-14 xl:max-w-[82.5rem] py-8 md:py-16":
            {},
        },
        ".h1": {
          "@apply text-black1 font-heading400 text-[2rem] xs:text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[50px] lg:leading-[4.0625rem] 2xl:text-[3.75rem] 2xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-black1 font-heading400 text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[35px] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-black1 font-heading400 text-[25px] leading-normal md:text-[1.9rem]": {},
        },
        ".h4": {
          "@apply text-black1 font-heading400 text-[22px] leading-normal": {},
        },
        ".h5": {
          "@apply text-black1 font-heading400 text-xl leading-normal": {},
        },
        ".h6": {
          "@apply text-black1 font-heading400 text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-black1 font-primary text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply text-black1 font-primary text-base leading-6 md:text-lg": {},
        },
        ".body-3": {
          "@apply text-black1 font-primary font-medium text-[0.875rem] leading-6 md:text-base": {},
        },
        ".btn-primary": {
          "@apply text-white bg-black1 flex items-center gap-2 capitalize tracking-wide text-sm md:text-base font-primary px-5 py-[12px] md:px-8 md:py-[14px] rounded-lg hover:bg-black":
            {},
        },
        ".btn-secondary": {
          "@apply text-primary bg-white border border-gray-400 hover:border-gray-900 flex items-center gap-2 capitalize tracking-wide text-sm md:text-base font-primary px-5 py-[12px] md:px-8 md:py-[14px] rounded-lg":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
