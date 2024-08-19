/** @type {import('tailwindcss').Config} */
export default {
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
			}
		},
	},
	plugins: [],
}

