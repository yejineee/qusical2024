import { SlHome, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { ICON_COLOR } from "./Icon";
import IconLinkButton from "./IconLinkButton";

function LinkSection() {
	const onClickChannel = () => {
		window.open("http://pf.kakao.com/_QuSBxj/friend", "_blank");
	};
	return (
		<div className="flex justify-center gap-8">
			<IconLinkButton url="https://www.instagram.com/the.daejangbu/">
				<SlSocialInstagram size="28" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://www.youtube.com/playlist?list=PLvn_5y4iSsmwTw6U4gEi532Ld7kj-Hc-W">
				<SlSocialYoutube size="28" color={ICON_COLOR} />
			</IconLinkButton>
			<IconLinkButton url="https://woori.cc/">
				<SlHome size="28" color={ICON_COLOR} />
			</IconLinkButton>
			<img
				onClick={onClickChannel}
				width="32"
				height="32"
				src="https://t1.kakaocdn.net/one/production/front/_next/static/media/channel_type2.4e470592.svg"
			/>
		</div>
	);
}

export default LinkSection;
