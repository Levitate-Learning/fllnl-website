/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md}",
	],
	plugins: [
		require('@tailwindcss/typography'),
	],
	fontFamily: {
		sans: ['Roboto', 'sans-serif'],
	},
};
