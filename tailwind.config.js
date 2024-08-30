/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primaryDarker: '#0768B5',
				primaryDark: '#0768B5',
				primary: '#2F9FF8',
				amberBlack: '#072D4B',
			},
			boxShadow: {
				theme: '0px 2px 20px 0px #0000000A'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

