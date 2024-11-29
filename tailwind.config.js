import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				thin: ["Pretendard-Thin", ...defaultTheme.fontFamily.sans],
				extralight: ["Pretendard-ExtraLight", ...defaultTheme.fontFamily.sans],
				light: ["Pretendard-Light", ...defaultTheme.fontFamily.sans],
				normal: ["Pretendard-Regular", ...defaultTheme.fontFamily.sans],
				medium: ["Pretendard-Medium", ...defaultTheme.fontFamily.sans],
				semibold: ["Pretendard-SemiBold", ...defaultTheme.fontFamily.sans],
				bold: ["Pretendard-Bold", ...defaultTheme.fontFamily.sans],
				extrabold: ["Pretendard-ExtraBold", ...defaultTheme.fontFamily.sans],
				black: ["Pretendard-Black", ...defaultTheme.fontFamily.sans],
				sans: ["Pretendard-Regular", ...defaultTheme.fontFamily.sans],
				bold: ["Pretendard-Bold", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
