import { twMerge } from "tailwind-merge";

export const ICON_COLOR = "#292524";

function Icon({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<div className={twMerge("flex items-center mr-2 w-6 h-6", className)}>
			{children}
		</div>
	);
}

export default Icon;
