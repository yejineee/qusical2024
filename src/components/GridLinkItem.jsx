import BlockContainer from "./BlockContainer";

function GridLinkItem({ subtitle, children, src, icon }) {
	return (
		<BlockContainer className="flex flex-col gap-4 p-2">
			<div className="flex flex-col justify-center items-center p-4 w-full h-full text-sm rounded-2xl bg-brown">
				{icon ? (
					<div className="flex justify-center items-center w-16 h-16 bg-white rounded-full">
						{icon}
					</div>
				) : (
					<img
						src={src ?? "/image/img1.jpg"}
						className={"object-fill w-16 h-16 rounded-full"}
					></img>
				)}
				<div className="pt-2 font-semibold text-white">
					{subtitle ?? children}
				</div>
			</div>
			<div className="pb-2 pl-2 text-sm">{children}</div>
		</BlockContainer>
	);
}

export default GridLinkItem;
