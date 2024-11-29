import { RiChatHeartLine } from "@remixicon/react";
import Icon, { ICON_COLOR } from "./components/Icon";
import InstagramBlock from "./components/InstagramBlock";
import LinkButton from "./components/LinkButton";
import ProfileSection from "./components/ProfileSection";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="flex flex-col gap-8 justify-between px-4 pt-16 pb-4">
			<ProfileSection />
			<div className="flex flex-col gap-4 w-full h-full">
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
				<LinkButton>hi</LinkButton>
			</div>
			<TwoByTwoSection />
			<InstagramBlock />
			<YoutubeBlock />
		</div>
	);
}

export default App;
