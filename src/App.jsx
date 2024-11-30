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
		<div className="mr-auto ml-auto max-w-screen-sm">
			<div className="flex flex-col gap-8 justify-between px-4 py-16 w-full h-full">
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
