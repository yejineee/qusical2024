import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";
import { isDev, isProd } from "~/utils/utils";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{isProd && <Analytics />}
			{isDev && <TanStackRouterDevtools />}
		</>
	),
});
