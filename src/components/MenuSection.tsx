import { Link, type LinkProps } from "@tanstack/react-router";
import { SlDiamond, SlList, SlMusicToneAlt, SlPeople } from "react-icons/sl";
import { ICON_COLOR } from "./Icon";

import BlockContainer from "./BlockContainer";

type MenuProps = {
	subtitle?: string;
	children: React.ReactNode;
	icon: React.ReactNode;
	to: LinkProps["to"];
};

function Menu({ subtitle, children, icon, to }: MenuProps) {
	return (
		<Link to={to}>
			<BlockContainer className="flex flex-col gap-4 p-2">
				<div className="flex flex-col items-center justify-center w-full h-full p-4 text-sm rounded-2xl bg-brown">
					<div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
						{icon}
					</div>
					<div className="pt-2 font-semibold text-white">
						{subtitle ?? children}
					</div>
				</div>
				<div className="pb-2 pl-2 text-sm">{children}</div>
			</BlockContainer>
		</Link>
	);
}

function MenuSection() {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-4 grid-flow-dense">
			<Menu
				to={"/story"}
				icon={<SlMusicToneAlt size="24" color={ICON_COLOR} />}
			>
				줄거리
			</Menu>
			<Menu to="/relation" icon={<SlPeople size="24" color={ICON_COLOR} />}>
				인물관계도
			</Menu>
			<Menu to="/contents" icon={<SlList size="24" color={ICON_COLOR} />}>
				공연 순서
			</Menu>
			<Menu
				to="/daejangbu"
				icon={<SlDiamond size="24" color={ICON_COLOR} />}
				subtitle="극단대장부"
			>
				큐지컬을 만든 사람들
			</Menu>
		</div>
	);
}

export default MenuSection;
