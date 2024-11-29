import GridLinkItem from "./components/GridLinkItem";
import InstagramBlock from "./components/InstagramBlock";
import LinkButton from "./components/LinkButton";
import ProfileSection from "./components/ProfileSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="flex flex-col justify-between px-4 pt-16 pb-4">
			<ProfileSection />
			<div className="flex flex-col gap-4 mt-4 w-full h-full">
				<LinkButton>응원의 한마디</LinkButton>
				<LinkButton>hi</LinkButton>
			</div>
			<div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-12 mb-12 grid-flow-dense">
				<GridLinkItem />
				<GridLinkItem />
				<GridLinkItem />
				<GridLinkItem />
			</div>
			<InstagramBlock />
			<YoutubeBlock />
		</div>
	);
}

export default App;
