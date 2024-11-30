import { SlHome, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { ICON_COLOR } from "./Icon";
import IconLinkButton from "./IconLinkButton";

function LinkSection() {
	return (
		<div className="flex gap-8 justify-center">
			<IconLinkButton url="https://www.instagram.com/the.daejangbu/">
				<SlSocialInstagram size="28" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://www.youtube.com/playlist?list=PLvn_5y4iSsmwTw6U4gEi532Ld7kj-Hc-W">
				<SlSocialYoutube size="28" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://woori.cc/">
				<SlHome size="28" color={ICON_COLOR} />
			</IconLinkButton>
		</div>
	);
}

export default LinkSection;
