import IconLinkButton from "./IconLinkButton";
import {
	RiHome2Line,
	RiInstagramLine,
	RiKakaoTalkLine,
	RiYoutubeLine,
} from "react-icons/ri";

function LinkSection() {
	return (
		<div className="flex justify-center gap-8 sm:gap-20">
			<IconLinkButton url="https://www.instagram.com/the.daejangbu/">
				<RiInstagramLine size="28" color="white" />
			</IconLinkButton>
			<IconLinkButton url="https://www.youtube.com/playlist?list=PLvn_5y4iSsmwTw6U4gEi532Ld7kj-Hc-W">
				<RiYoutubeLine size="28" color="white" />
			</IconLinkButton>
			<IconLinkButton url="https://woori.cc/">
				<RiHome2Line size="28" color="white" />
			</IconLinkButton>
			<IconLinkButton url="http://pf.kakao.com/_QuSBxj/friend">
				<RiKakaoTalkLine size="28" color="white" />
			</IconLinkButton>
		</div>
	);
}

export default LinkSection;
