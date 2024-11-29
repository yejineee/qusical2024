function LinkButton({ children, outerLink, icon }) {
	const onClick = () => {
		if (outerLink) {
			return window.open(outerLink, "_blank", "noopener,noreferrer");
		}
	};

	if (icon) {
		return (
			<button
				className="flex relative justify-center items-center px-4 w-full h-12 bg-white rounded-3xl shadow-md"
				onClick={onClick}
			>
				<div className="absolute left-4 w-6 h-6">{icon}</div>
				<div>{children}</div>
			</button>
		);
	}

	return (
		<button
			className="w-full h-12 bg-white rounded-3xl shadow-md"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default LinkButton;
