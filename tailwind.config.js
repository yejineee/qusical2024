import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				brown: "#54473F",
			},
			fontFamily: {
				sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
				title: ["행복고흥L"],
			},
		},
	},
	plugins: [],
};
