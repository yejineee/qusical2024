import { RiShare2Line } from "react-icons/ri";
import { URL_TITLE } from "../constants";

interface Props {
	title?: string;
	url: string;
	className?: string;
	iconColor?: string;
}
export default function Share({
	title = URL_TITLE,
	url,
	iconColor = "black",
	className,
}: Props) {
	const handleClick = () => {
		navigator.share({ title, url }).catch(() => {});
	};

	if (typeof navigator.share === "undefined") {
		return;
	}

	return (
		<button onClick={handleClick} className={className}>
			<RiShare2Line color={iconColor} />
		</button>
	);
}
