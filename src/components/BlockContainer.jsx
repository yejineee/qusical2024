import { twMerge } from "tailwind-merge";

function BlockContainer({ className, children }) {
	return (
		<div className={twMerge("p-4 bg-white rounded-3xl shadow-md", className)}>
			{children}
		</div>
	);
}

export default BlockContainer;
