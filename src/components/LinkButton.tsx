import { twMerge } from "tailwind-merge";

interface Props {
	children: React.ReactNode;
	outerLink?: string;
	icon?: React.ReactNode;
	className?: string;
}

function LinkButton({ children, outerLink, icon, className }: Props) {
	const onClick = () => {
		if (outerLink) {
			return window.open(outerLink, "_blank", "noopener,noreferrer");
		}
	};

	if (icon) {
		return (
			<button
				className={twMerge(
					"relative flex items-center justify-center w-full h-12 px-4 bg-white shadow-md rounded-2xl",
					className,
				)}
				onClick={onClick}
			>
				<div className="absolute w-6 h-6 left-4">{icon}</div>
				<div>{children}</div>
			</button>
		);
	}

	return (
		<button
			className={twMerge(
				"w-full h-12 bg-white shadow-md rounded-3xl",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default LinkButton;
