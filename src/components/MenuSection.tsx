import { Link, type LinkProps } from "@tanstack/react-router";
import { SlDiamond, SlInfo, SlMusicToneAlt, SlPeople } from "react-icons/sl";
import { ICON_COLOR } from "./Icon";

import BlockContainer from "./BlockContainer";

type MenuProps = {
	children: React.ReactNode;
	icon: React.ReactNode;
	to: LinkProps["to"];
};

function Menu({ children, icon, to }: MenuProps) {
	return (
		<Link to={to}>
			<BlockContainer className="flex flex-col gap-4 p-2">
				<div className="flex flex-col items-center justify-center w-full h-full p-2 text-sm rounded-2xl">
					<div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
						{icon}
					</div>
					<div className="pt-2 font-semibold">{children}</div>
				</div>
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
			<Menu to="/contents" icon={<SlInfo size="24" color={ICON_COLOR} />}>
				공연안내
			</Menu>
			<Menu to="/daejangbu" icon={<SlDiamond size="24" color={ICON_COLOR} />}>
				극단대장부
			</Menu>
		</div>
	);
}

export default MenuSection;
