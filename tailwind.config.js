/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
// import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      heading: "var(--font-heading)",
      primary: "var(--font-primary)",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1536px",
    },
    container: {
      center: true,
      padding: {
          DEFAULT : '15px',
      },
    },
    backgroundImage: {
      hero: "url('/assets/images/hero/bg2.jpg')",
      grid: "url('/assets/images/grid.png')",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] px-5 md:px-10 lg:px-14 xl:max-w-[82.5rem]":
            {},
        },
        ".h1": {
          "@apply text-black1 font-heading text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[50px] lg:leading-[4.0625rem] 2xl:text-[3.75rem] 2xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-black1 font-heading text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[35px] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-black1 font-heading text-[25px] leading-normal md:text-[1.9rem]": {},
        },
        ".h4": {
          "@apply text-black1 font-heading text-[22px] leading-normal": {},
        },
        ".h5": {
          "@apply text-black1 font-heading text-xl leading-normal": {},
        },
        ".h6": {
          "@apply text-black1 font-heading text-lg leading-8": {},
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
          "@apply text-white bg-black1 flex items-center gap-2 capitalize tracking-wide text-sm md:text-base font-primary px-5 py-[12px] md:px-8 md:py-[14px] rounded-lg":
            {},
        },
        ".btn-secondary": {
          "@apply text-white bg-brown flex items-center gap-2 capitalize tracking-wide text-sm md:text-base font-primary px-5 py-[12px] md:px-8 md:py-[14px] rounded-lg":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
