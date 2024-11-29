import { RiYoutubeFill } from "react-icons/ri";
import BlockContainer from "./BlockContainer";
import Icon, { ICON_COLOR } from "./Icon";

function YoutubeBlock() {
	return (
		<BlockContainer>
			<TitleSection />
			<div className="my-4">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/cJSINRz8qck?si=qnsRTsB8uvi6ILpR"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</BlockContainer>
	);
}

export default YoutubeBlock;

function TitleSection() {
	return (
		<div className="flex items-center">
			<Icon>
				<RiYoutubeFill size={24} color={ICON_COLOR} />
			</Icon>
			<div className="text-lg font-medium">Youtube</div>
		</div>
	);
}
