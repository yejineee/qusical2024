import { RiChatHeartLine } from "react-icons/ri";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";

const LINK = "https://rollingpaper.site/rolls/1074966";

const CheerLink = () => {
	return (
		<>
			<LinkButton
				className="font-semibold"
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
