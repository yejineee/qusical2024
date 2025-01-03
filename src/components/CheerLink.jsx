import { useEffect, useRef, useState } from "react";
import { RiChatHeartLine } from "react-icons/ri";
import { twJoin } from "tailwind-merge";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";

const LINK = "https://rollingpaper.site/rolls/1074966";

const CheerLink = () => {
	const ref = useRef();
	const [showFloatingButton, setShowFloatingButton] = useState(true);
	useEffect(() => {
		if (!ref || !ref.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setShowFloatingButton(!entry.isIntersecting);
				});
			},
			{
				rootMargin: "70px",
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
			{showFloatingButton && (
				<div className="fixed left-0 right-0 z-10 flex justify-end sm:hidden container-width bottom-6">
					<a
						className={twJoin(
							`
				
					mr-3
					 max-w-32

				from-[#F0A8D0]
				via-[#f0b9c6]
			to-[#FFFED3]
			sm:px-6 sm:py-2
			px-4 py-2 rounded-3xl  font-semibold 
			bg-gradient-to-r   from-5% via-50%
shadow-gray-900
			shadow

`,
						)}
						target="_blank"
						href={LINK}
						rel="noopener noreferrer"
					>
						<div>응원하기 💌</div>
					</a>
				</div>
			)}

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
