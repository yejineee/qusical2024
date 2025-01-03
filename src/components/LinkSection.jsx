import {
	RiHome2Line,
	RiInstagramLine,
	RiKakaoTalkLine,
	RiYoutubeLine,
} from "react-icons/ri";
import IconLinkButton from "./IconLinkButton";

const SIZE = 32;

function LinkSection() {
	return (
		<div className="flex justify-center gap-8 sm:mb-12 sm:gap-20">
			<IconLinkButton url="https://www.instagram.com/the.daejangbu/">
				<RiInstagramLine size={SIZE} color="white" />
			</IconLinkButton>
			<IconLinkButton url="https://www.youtube.com/playlist?list=PLvn_5y4iSsmwTw6U4gEi532Ld7kj-Hc-W">
				<RiYoutubeLine size={SIZE} color="white" />
			</IconLinkButton>
			<IconLinkButton url="https://woori.cc/">
				<RiHome2Line size={SIZE} color="white" />
			</IconLinkButton>
			<IconLinkButton url="http://pf.kakao.com/_QuSBxj/">
				<RiKakaoTalkLine size={SIZE} color="white" />
			</IconLinkButton>
		</div>
	);
}

export default LinkSection;
