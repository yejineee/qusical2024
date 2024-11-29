import CheerLink from "./components/CheerLink";
import InstagramBlock from "./components/InstagramBlock";
import LinkSection from "./components/LinkSection";
import ProfileSection from "./components/ProfileSection";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="flex flex-col gap-8 justify-between px-4 py-16">
			<ProfileSection />
			<TwoByTwoSection />
			<YoutubeBlock />
			<InstagramBlock />
			<CheerLink />
			<LinkSection />
		</div>
	);
}

export default App;
