import GridLinkItem from "./GridLinkItem";

function TwoByTwoSection() {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-4 grid-flow-dense">
			<GridLinkItem>공연 순서</GridLinkItem>
			<GridLinkItem>인물관계도</GridLinkItem>
			<GridLinkItem>넘버</GridLinkItem>
			<GridLinkItem subtitle="극단대장부">큐지컬을 만든 사람들</GridLinkItem>
		</div>
	);
}

export default TwoByTwoSection;
