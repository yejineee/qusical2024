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
				sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
				title: ["행복고흥L"],
			},
		},
	},
	plugins: [],
};
