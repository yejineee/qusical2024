import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
				hambak: ["hambak"],
			},
		},
	},
	plugins: [],
};
