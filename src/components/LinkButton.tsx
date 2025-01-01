import { twMerge } from "tailwind-merge";

interface Props {
	children: React.ReactNode;
	outerLink?: string;
	icon?: React.ReactNode;
	className?: string;
}

function LinkButton({ children, outerLink, icon, className }: Props) {
	if (icon) {
		return (
			<a
				className={twMerge(
					"relative flex items-center justify-center w-full h-12 px-4 bg-white shadow-md rounded-2xl",
					className,
				)}
				href={outerLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="absolute w-6 h-6 left-4">{icon}</div>
				<div>{children}</div>
			</a>
		);
	}

	return (
		<a
			className={twMerge(
				"w-full h-12 bg-white shadow-md rounded-3xl",
				className,
			)}
			href={outerLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}

export default LinkButton;
