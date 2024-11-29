import { RiInstagramFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import BlockContainer from "./BlockContainer";
import Icon, { ICON_COLOR } from "./Icon";

function InstagramBlock() {
	return (
		<BlockContainer>
			<InstagramTitleSection />
			<div className="grid grid-cols-2 gap-x-4 gap-y-4 my-4 grid-flow-dense">
				{/* 1st */}
				<GridImageItem className="rounded-tl-xl" />
				<GridImageItem className="rounded-tr-xl" />
				{/* 2nd */}
				<GridImageItem className="rounded-bl-xl" />
				<GridImageItem className="rounded-br-xl" />
			</div>
			<InstagramBottomSection />
		</BlockContainer>
	);
}

export default InstagramBlock;

function InstagramTitleSection() {
	return (
		<div className="flex items-center">
			<Icon>
				<RiInstagramFill size={24} color={ICON_COLOR} />
			</Icon>
			<div className="text-lg font-medium">Instagram</div>
		</div>
	);
}

function InstagramBottomSection() {
	{
		return (
			<div className="flex justify-between items-center">
				<div>
					<span className="font-serif">@</span>
					the.daejangbu
				</div>
				<a
					className="px-4 py-3 font-semibold text-neutral-100 rounded-3xl bg-stone-800 min-w-[48px]"
					href="https://www.instagram.com/the.daejangbu/"
					target="_blank"
				>
					Follow
				</a>
			</div>
		);
	}
}

function GridImageItem({ className, src }) {
	return (
		<img
			src={src ?? "/image/img4.jpg"}
			className={twMerge(
				"object-cover w-full h-full rounded-md aspect-square",
				className,
			)}
		></img>
	);
}
