function IconLinkButton({ url, children }) {
	const handleClick = () => {
		if (!url) return;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<button
			className="flex justify-center items-center p-1"
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

export default IconLinkButton;
