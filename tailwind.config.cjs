/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

  daisyui: {
    themes: ["forest"],
  },

	plugins: [require("daisyui"),require('flowbite/plugin')],
};

module.exports = config;
