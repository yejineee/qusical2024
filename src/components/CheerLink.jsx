import { RiChatHeartLine } from "react-icons/ri";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";

const LINK = "https://rollingpaper.site/rolls/1074966";

const CheerLink = () => {
	return (
		<>
			<LinkButton
				className="
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
