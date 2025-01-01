import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
			},
			fontFamily: {
				sans: ["Archivo", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
