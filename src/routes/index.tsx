import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import CheerLink from "~/components/CheerLink";
import InstagramBlock from "~/components/InstagramBlock";
import LinkSection from "~/components/LinkSection";
import ProfileSection from "~/components/ProfileSection";
import Share from "~/components/Share";
import MenuSection from "~/components/MenuSection";
import YoutubeBlock from "~/components/YoutubeBlock";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const profileRef = useRef<HTMLDivElement>();

	return (
		<div className="flex flex-col justify-between w-full h-full gap-8">
			<Share profileRef={profileRef} />
			<ProfileSection ref={profileRef} />
			<MenuSection />
			<YoutubeBlock />
			<InstagramBlock />
			<CheerLink />
			<LinkSection />
		</div>
	);
}
