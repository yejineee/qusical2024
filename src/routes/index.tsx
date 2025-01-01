import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import CheerLink from "~/components/CheerLink";
import InstagramBlock from "~/components/InstagramBlock";
import LinkSection from "~/components/LinkSection";
import MenuSection from "~/components/MenuSection";
import ProfileSection from "~/components/ProfileSection";
import Share from "~/components/Share";
import Time from "~/components/Time";
import YoutubeBlock from "~/components/YoutubeBlock";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const profileRef = useRef<HTMLDivElement>();

	return (
		<div className="bg-primary">
			<div className="flex flex-col w-full h-full container-width container-height">
				<Share profileRef={profileRef} />
				<ProfileSection ref={profileRef} />
				<div className="flex flex-col w-full h-full gap-8 px-4 py-8 sm:px-0">
					<Time />
					<MenuSection />
					<YoutubeBlock />
					<InstagramBlock />
					<CheerLink />
					<LinkSection />
				</div>
			</div>
		</div>
	);
}
