import CheerLink from "./components/CheerLink";
import InstagramBlock from "./components/InstagramBlock";
import LinkSection from "./components/LinkSection";
import ProfileSection from "./components/ProfileSection";
import TwoByTwoSection from "./components/TwoByTwoSection";
import YoutubeBlock from "./components/YoutubeBlock";

function App() {
	return (
		<div className="mr-auto ml-auto max-w-screen-sm">
			<Share />
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

const data = {
	title: "2025 큐지컬 - 유다",
	url: "https://qusical2024.vercel.app/",
};

function Share() {
	const handleClick = async () => {
		try {
			await navigator.share(data);
			alert("success");
		} catch {
			alert("error!");
		}
	};

	if (!navigator.share) {
		return;
	}
	return (
		<div className="absolute top-4 right-4">
			<button onClick={handleClick}>share</button>
		</div>
	);
}
