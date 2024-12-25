import { RiChatHeartLine } from "react-icons/ri";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";

const CheerLink = () => {
	return (
		<LinkButton
			outerLink="https://rollingpaper.site/rolls/1074966"
			icon={
				<Icon>
					<RiChatHeartLine size={24} color={ICON_COLOR} />
				</Icon>
			}
		>
			응원 메시지
		</LinkButton>
	);
};

export default CheerLink;
