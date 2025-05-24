/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				font_bold: ["font_bold"],
				font_sans: ["font_sans"],
				font_stencil: ["font_stencil"]
			},
			backgroundColor: {
				buttonBg: "#313237",
				
			},
			colors: {
				dark: "#1d1e23",
				main_blue: "#077ee1",
				silver: "#9fa0a3",
				button_light_blue: "#00bef2",
				button_dark_blue: "#0082fc"
			}
		}
	},
	plugins: []
};
