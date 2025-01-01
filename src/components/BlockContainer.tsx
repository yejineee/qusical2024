import { twMerge } from "tailwind-merge";

function BlockContainer({
	className,
	children,
}: { className?: string; children: React.ReactNode }) {
	return (
		<div className={twMerge("p-4 bg-white rounded-xl shadow-md", className)}>
			{children}
		</div>
	);
}

export default BlockContainer;
