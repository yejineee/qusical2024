import { type MutableRefObject, useEffect } from "react";

import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { URL, URL_TITLE } from "../constants";
import BaseShare from "./BaseShare";

const data = {
	title: URL_TITLE,
	url: URL.HOME,
};

interface Props {
	profileRef: MutableRefObject<HTMLDivElement | undefined> | null;
}
export default function Share({ profileRef }: Props) {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		if (!profileRef || !profileRef.current) return;
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
			if (!profileRef.current) return;
			observer.unobserve(profileRef.current);
		};
	}, [profileRef]);

	return (
		<div className="fixed top-0 left-0 right-0 z-10 flex justify-end px-2 pt-4 sm:pt-8 container-width">
			<BaseShare
				{...data}
				iconColor="white"
				className={twJoin(
					"p-3 bg-opacity-30 rounded-full transition-opacity duration-300 bg-neutral-300 focus:border focus:border-stone-500",
					isVisible ? "opacity-100" : "opacity-0",
				)}
			/>
		</div>
	);
}
