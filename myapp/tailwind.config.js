/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/*.{js,ts,jsx,tsx}', // Include JavaScript and TypeScript files in the src directory
	],
	theme: {
		colors: {
			yellow: '#FFFBEB',
			'myColorGrey': '#F5EEE6',
			'myColorBeige': '#FFF8E3',
			'myColorBrown': '#F3D7CA',
			'myColorPink': '#E6A4B4',
		},
		extend: {},
	},
	plugins: [],
}

