import { useEffect } from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import { useState } from "react";
import { RiShare2Line } from "react-icons/ri";
import { twJoin } from "tailwind-merge";
import { URL, URL_TITLE } from "../constants";

const data = {
	title: URL_TITLE,
	url: URL.HOME,
};

const Share = forwardRef(function Share(_, profileRef) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (!profileRef.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting);
				});
			},
			{
				threshold: 0.4,
			},
		);
		observer.observe(profileRef.current);
		return () => {
			observer.unobserve(profileRef.current);
		};
	}, [profileRef]);

	const handleClick = () => {
		navigator.share(data).catch(() => {});
	};

	if (typeof navigator.share === "undefined") {
		return;
	}

	return (
		<div className="flex fixed top-0 right-0 left-0 justify-end px-2 pt-4 mr-auto ml-auto max-w-screen-sm">
			<button
				onClick={handleClick}
				className={twJoin(
					"p-2 bg-opacity-60 rounded-full transition-opacity duration-300 bg-stone-500",
					isVisible ? "opacity-100" : "opacity-0",
				)}
			>
				<RiShare2Line color="white" />
			</button>
		</div>
	);
});

export default Share;
