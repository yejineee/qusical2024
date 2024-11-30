import {
	SlDiamond,
	SlGhost,
	SlList,
	SlMagicWand,
	SlMusicToneAlt,
	SlPeople,
} from "react-icons/sl";
import GridLinkItem from "./GridLinkItem";
import { ICON_COLOR } from "./Icon";

function TwoByTwoSection() {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-4 grid-flow-dense">
			<GridLinkItem icon={<SlList size="24" color={ICON_COLOR} />}>
				공연 순서
			</GridLinkItem>
			<GridLinkItem icon={<SlPeople size="24" color={ICON_COLOR} />}>
				인물관계도
			</GridLinkItem>
			<GridLinkItem icon={<SlMusicToneAlt size="24" color={ICON_COLOR} />}>
				넘버
			</GridLinkItem>
			<GridLinkItem
				icon={<SlDiamond size="24" color={ICON_COLOR} />}
				subtitle="극단대장부"
			>
				큐지컬을 만든 사람들
			</GridLinkItem>
		</div>
	);
}

export default TwoByTwoSection;
