import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<div className="max-w-screen-sm px-4 py-12 ml-auto mr-auto">
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	),
});
