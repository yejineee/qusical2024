import { twMerge } from "tailwind-merge";
import BlockContainer from "./BlockContainer";

function GridLinkItem({ subtitle, children, src, imgClassName }) {
	return (
		<BlockContainer className="flex flex-col gap-4 p-2">
			<div className="flex flex-col justify-center items-center p-4 w-full h-full text-sm rounded-2xl bg-brown">
				<img
					src={src ?? "/image/img1.jpg"}
					className={twMerge(
						"object-cover w-16 h-16 rounded-full",
						imgClassName,
					)}
				></img>
				<div className="pt-2 font-semibold text-white">
					{subtitle ?? children}
				</div>
			</div>
			<div className="pb-2 pl-2 text-sm">{children}</div>
		</BlockContainer>
	);
}

export default GridLinkItem;
