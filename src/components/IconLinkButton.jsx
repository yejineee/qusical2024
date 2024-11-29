import Icon from "./Icon";

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
			<Icon>{children}</Icon>
		</button>
	);
}

export default IconLinkButton;
