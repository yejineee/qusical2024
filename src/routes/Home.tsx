import CheerLink from "@/components/CheerLink";
import InstagramBlock from "@/components/InstagramBlock";
import LinkSection from "@/components/LinkSection";
import ProfileSection from "@/components/ProfileSection";
import TwoByTwoSection from "@/components/TwoByTwoSection";
import YoutubeBlock from "@/components/YoutubeBlock";
import { isClient } from "@/utils";
import { lazy, useRef } from "react";
const Share = lazy(() => import("@/components/Share"));

function App() {
	const profileRef = useRef();
	return (
		<div className="flex flex-col justify-between w-full h-full gap-8 px-4 py-16">
			{isClient && <Share ref={profileRef} root={profileRef.current} />}
			<ProfileSection ref={profileRef} />
			<TwoByTwoSection />
			<YoutubeBlock />
			<InstagramBlock />
			<CheerLink />
			<LinkSection />
		</div>
	);
}

export default App;
