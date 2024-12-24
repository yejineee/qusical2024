import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const Route = createRootRoute({
	component: () => (
		<div className="max-w-screen-sm px-4 py-12 ml-auto mr-auto">
			<Outlet />
			<Analytics />
			{import.meta.env.DEV && <TanStackRouterDevtools />}
		</div>
	),
});
