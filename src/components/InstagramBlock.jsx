import { RiInstagramFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import BlockContainer from "./BlockContainer";
import Icon, { ICON_COLOR } from "./Icon";

function InstagramBlock() {
	return (
		<BlockContainer>
			<InstagramTitleSection />
			<div className="grid grid-cols-2 my-4 gap-x-4 gap-y-4 grid-flow-dense">
				{/* 1st */}
				<GridImageItem
					className="rounded-tl-xl"
					src={`//i1.daumcdn.net/thumb/${encodeURIComponent("C280x280@2x.q70.fwebp")}/?fname=https://qusical2025.vercel.app/image/inst4.jpg`}
				/>
				<GridImageItem className="rounded-tr-xl" src="/image/inst3.jpg" />
				{/* 2nd */}
				<GridImageItem className="rounded-bl-xl" src="/image/inst2.jpg" />
				<GridImageItem className="rounded-br-xl" src="/image/inst1.jpg" />
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
			<div className="flex items-center justify-between">
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
			src={src}
			className={twMerge(
				"object-cover w-full h-full rounded-md aspect-square",
				className,
			)}
		></img>
	);
}
