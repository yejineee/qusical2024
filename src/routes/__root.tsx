import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<Analytics />
			{import.meta.env.DEV && <TanStackRouterDevtools />}
		</>
	),
});
