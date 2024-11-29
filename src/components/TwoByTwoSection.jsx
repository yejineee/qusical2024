import GridLinkItem from "./GridLinkItem";

function TwoByTwoSection() {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-4 grid-flow-dense">
			<GridLinkItem />
			<GridLinkItem />
			<GridLinkItem />
			<GridLinkItem />
		</div>
	);
}

export default TwoByTwoSection;
