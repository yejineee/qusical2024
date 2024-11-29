import CheerLink from "./components/CheerLink";
import InstagramBlock from "./components/InstagramBlock";
import LinkButton from "./components/LinkButton";
import ProfileSection from "./components/ProfileSection";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="flex flex-col gap-8 justify-between px-4 pt-16 pb-4">
			<ProfileSection />
			<TwoByTwoSection />
			<YoutubeBlock />
			<InstagramBlock />
			<CheerLink />
		</div>
	);
}

export default App;
