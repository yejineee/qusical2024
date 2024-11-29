import { PiInstagramLogo, PiLink, PiYoutubeLogo } from "react-icons/pi";
import { ICON_COLOR } from "./Icon";
import IconLinkButton from "./IconLinkButton";

function LinkSection() {
	return (
		<div className="flex gap-4 justify-center">
			<IconLinkButton url="https://www.instagram.com/the.daejangbu/">
				<PiInstagramLogo size="32" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://www.youtube.com/playlist?list=PLvn_5y4iSsmwTw6U4gEi532Ld7kj-Hc-W">
				<PiYoutubeLogo size="32" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://woori.cc/">
				<PiLink size="32" color={ICON_COLOR} />
			</IconLinkButton>
		</div>
	);
}

export default LinkSection;
