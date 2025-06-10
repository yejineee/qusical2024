import { RiInstagramFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import BlockContainer from "./BlockContainer";
import Icon, { ICON_COLOR } from "./Icon";
import Image from "./Image";

function InstagramBlock() {
	return (
		<BlockContainer>
			<InstagramTitleSection />
			{/* Mobile Layout */}
			<div className="grid grid-cols-3 grid-rows-3 my-4 gap-2 md:hidden">
				{/* Large image spanning 2 rows and 2 columns */}
				<GridImageItem className="row-span-2 col-span-2 rounded-tl-xl rounded-bl-xl" file="inst1_new.jpg" />
				{/* Top right small image */}
				<GridImageItem className="rounded-tr-xl" file="inst2.jpg" />
				{/* Middle right small image */}
				<GridImageItem file="inst3.jpg" />
				{/* Bottom row */}
				<GridImageItem file="inst4.jpg" />
				<GridImageItem file="inst2.jpg" />
				<GridImageItem className="rounded-br-xl" file="inst3.jpg" />
			</div>
			
			{/* Desktop Layout */}
			<div className="hidden md:grid grid-cols-3 my-4 gap-x-2 gap-y-2">
				{/* 1st row */}
				<GridImageItem className="rounded-tl-xl" file="inst1_new.jpg" />
				<GridImageItem file="inst2.jpg" />
				<GridImageItem className="rounded-tr-xl" file="inst3.jpg" />
				{/* 2nd row */}
				<GridImageItem file="inst4.jpg" />
				<GridImageItem file="inst1_new.jpg" />
				<GridImageItem file="inst2.jpg" />
				{/* 3rd row */}
				<GridImageItem className="rounded-bl-xl" file="inst3.jpg" />
				<GridImageItem file="inst4.jpg" />
				<GridImageItem className="rounded-br-xl" file="inst1_new.jpg" />
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
			<div className="block-title">Instagram</div>
		</div>
	);
}

function InstagramBottomSection() {
	{
		return (
			<div className="flex items-center justify-between w-full">
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

function GridImageItem({
	className,
	file,
}: { className?: string; file: string }) {
	return (
		<Image
			file={file}
			className={twMerge(
				"object-cover w-full h-full rounded-md aspect-square",
				className,
			)}
			size={280}
		/>
	);
}
