import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>2025 큐지컬 - 유다</title>
				<meta name="language" content="Korean" />
				<meta name="geo.region" content="KR" />
				<meta property="og:title" content="2025 큐지컬 - 유다" />
				<meta
					property="og:description"
					content="“왜 요셉이 아닌 유다가 구속사의 계보를 이었을까”"
				/>
				<meta property="og:image" content="/image/profile.png" />
				<meta property="og:url" content="https://qusical2024.vercel.app/" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function Root() {
	return (
		<div className="max-w-screen-sm ml-auto mr-auto">
			<Outlet />
		</div>
	);
}