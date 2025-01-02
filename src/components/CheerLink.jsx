import { RiChatHeartLine } from "react-icons/ri";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";
import { useRef, useState, useEffect } from "react";
import { twJoin } from "tailwind-merge";

const LINK = "https://rollingpaper.site/rolls/1074966";

const CheerLink = () => {
	const ref = useRef();
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		if (!ref || !ref.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting);
				});
			},
			{
				rootMargin: "90px",
			},
		);
		observer.observe(ref.current);
		return () => {
			if (!ref.current) return;
			observer.unobserve(ref.current);
		};
	}, [ref]);

	return (
		<>
			<div className="fixed left-0 right-0 z-10 flex justify-end container-width bottom-4">
				<a
					className={twJoin(
						`
				sm:hidden
					mr-2
					 max-w-32

				from-[#F0A8D0]
				via-[#f0b9c6]
			to-[#FFFED3]
			sm:px-6 sm:py-2
			transition-opacity duration-100
			
			px-4 py-[0.25rem] rounded-xl  font-semibold 
			bg-gradient-to-r   from-5% via-50%
shadow-gray-900
			shadow

`,
						isVisible ? "opacity-0" : "opacity-100",
					)}
					target="_blank"
					href={LINK}
					rel="noopener noreferrer"
				>
					<div>응원하기 💌</div>
				</a>
			</div>

			<LinkButton
				ref={ref}
				className="
sm:container-width
				sm:fixed sm:left-0 sm:right-0 sm:bottom-4 sm:z-10
shadow-gray-900
			hover:from-[#F0A8D0]
			hover:via-[#FFFED3]
			hover:to-[#BBE9FF]
			from-[#f0b9c6]
			via-[#FFFED3]
			to-[#BED7DC]

				font-semibold bg-gradient-to-r   from-10%   to-80%"
				outerLink={LINK}
				icon={
					<Icon>
						<RiChatHeartLine size={24} color={ICON_COLOR} />
					</Icon>
				}
			>
				응원하기
			</LinkButton>
		</>
	);
};

export default CheerLink;
