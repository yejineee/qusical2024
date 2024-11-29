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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM12.0178 14.6997L8.65901 11.341C7.78033 10.4623 7.78033 9.03769 8.65901 8.15901C9.53769 7.28033 10.9623 7.28033 11.841 8.15901L12.0178 8.33579L12.1945 8.15901C13.0732 7.28033 14.4978 7.28033 15.3765 8.15901C16.2552 9.03769 16.2552 10.4623 15.3765 11.341L12.0178 14.6997Z"></path>
						</svg>
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
