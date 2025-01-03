import BlockContainer from "./BlockContainer";
export default function ContentsBox({
	title,
	children,
}: {
	title: string;
	children?: React.ReactNode;
}) {
	return (
		<BlockContainer>
			<div className="flex items-center justify-between pb-2 text-lg font-bold border-b-2 border-b-stone-200">
				{title}
			</div>
			{children}
		</BlockContainer>
	);
}
