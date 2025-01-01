import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";
import { isDev } from "~/utils/utils";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<Analytics />
			{isDev && <TanStackRouterDevtools />}
		</>
	),
});
