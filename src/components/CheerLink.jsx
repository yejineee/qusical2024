import { RiChatHeartLine } from "@remixicon/react";
import Icon, { ICON_COLOR } from "./Icon";
import LinkButton from "./LinkButton";

const CheerLink = () => {
	return (
		<LinkButton
			outerLink="https://rollingpaper.site/rolls/1067289"
			icon={
				<Icon>
					<RiChatHeartLine color={ICON_COLOR} />
				</Icon>
			}
		>
			응원하기
		</LinkButton>
	);
};

export default CheerLink;
