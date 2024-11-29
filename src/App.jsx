import CheerLink from "./components/CheerLink";
import InstagramBlock from "./components/InstagramBlock";
import LinkSection from "./components/LinkSection";
import ProfileSection from "./components/ProfileSection";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="mr-auto ml-auto max-w-screen-sm">
			<div className="flex flex-col gap-8 justify-between px-4 py-16 w-full h-full">
				<ProfileSection />
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
