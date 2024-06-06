/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}', // Include JavaScript and TypeScript files in the src directory
	],
	theme: {
		extend: {
			height: {

			},
			colors: {
				yellow: '#FFFBEB',
				inactiveGrey: '#d3d3d3',
				buttonYellow: '#FFD700',
				'myColorGrey': '#F5EEE6',
				'myColorBeige': '#FFF8E3',
				'myColorBrown': '#F3D7CA',
				'myColorPink': '#E6A4B4',
				'gray-dark': '#273444',
				'gray': '#8492a6',
				'gray-light': '#d3dce6',
				'greys': '#111827'
			},
		},
	},
	 plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

