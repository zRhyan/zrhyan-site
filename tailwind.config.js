// tailwind.config.js

/*
With the release of Tailwind CSS v4, you no longer need to create a tailwind.config.js file for most customizations. 
The framework has shifted to a *CSS-first configuration* approach, allowing you to define your design tokens, themes, and even custom utilities directly in your CSS file where you import Tailwind. 
This significantly simplifies setup and keeps all your configuration in one place.

- Running npx tailwindcss init will not generate a config file by default in v4.
- Most customizations (colors, fonts, breakpoints, etc.) can now be handled with CSS variables and the new @theme syntax inside your CSS.
- The config file is only needed for advanced use cases, like plugins or highly custom setups.

In summary, you do *not* need tailwind.config.js for typical settings in Tailwind CSS v4, but it remains available for advanced scenarios if required. 
Would you like an example of how to configure Tailwind directly in your CSS file?

https://tailwindcss.com/blog/tailwindcss-v4
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
};