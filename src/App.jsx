import { useRef } from "react";
import CheerLink from "./components/CheerLink";
import InstagramBlock from "./components/InstagramBlock";
import LinkSection from "./components/LinkSection";
import ProfileSection from "./components/ProfileSection";
import Share from "./components/Share";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	const profileRef = useRef();
	return (
		<div className="max-w-screen-sm ml-auto mr-auto">
			<div className="flex flex-col justify-between w-full h-full gap-8 px-4 py-12">
				<Share ref={profileRef} root={profileRef.current} />
				<ProfileSection ref={profileRef} />
				<TwoByTwoSection />
				<YoutubeBlock />
				<InstagramBlock />
				<CheerLink />
				<LinkSection />
			</div>
		</div>
	);
}

export default App;
