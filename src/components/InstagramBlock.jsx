import { twMerge } from "tailwind-merge";
import BlockContainer from "./BlockContainer";

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
			<div className="mr-2 w-8 h-8">
				<svg viewBox="0 0 32 32" class="w-full h-full" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M11.8774 6.06023C12.9441 6.01169 13.2849 5.99982 16.0008 5.99982H15.9979C18.7146 5.99982 19.0542 6.01169 20.1209 6.06023C21.1855 6.10899 21.9126 6.27753 22.5501 6.52483C23.2084 6.78004 23.7647 7.12171 24.321 7.67797C24.8772 8.23382 25.2189 8.79174 25.4751 9.44946C25.721 10.0853 25.8897 10.812 25.9397 11.8766C25.9876 12.9433 26.0001 13.2841 26.0001 16C26.0001 18.7159 25.9876 19.0559 25.9397 20.1226C25.8897 21.1868 25.721 21.9136 25.4751 22.5497C25.2189 23.2072 24.8772 23.7651 24.321 24.321C23.7653 24.8772 23.2082 25.2197 22.5507 25.4752C21.9145 25.7225 21.1869 25.891 20.1223 25.9398C19.0557 25.9883 18.7159 26.0002 15.9998 26.0002C13.2841 26.0002 12.9435 25.9883 11.8768 25.9398C10.8124 25.891 10.0855 25.7225 9.44923 25.4752C8.79192 25.2197 8.234 24.8772 7.67836 24.321C7.12231 23.7651 6.78064 23.2072 6.52501 22.5495C6.27792 21.9136 6.10938 21.187 6.06042 20.1224C6.01208 19.0557 6 18.7159 6 16C6 13.2841 6.0125 12.9431 6.06 11.8764C6.10792 10.8122 6.27667 10.0853 6.52459 9.44925C6.78085 8.79174 7.12252 8.23382 7.67878 7.67797C8.23462 7.12192 8.79255 6.78025 9.45027 6.52483C10.0861 6.27753 10.8128 6.10899 11.8774 6.06023ZM21.339 9.46244C21.1016 9.46244 20.8696 9.53283 20.6722 9.66471C20.4749 9.79659 20.3211 9.98403 20.2302 10.2033C20.1394 10.4226 20.1157 10.6639 20.162 10.8967C20.2084 11.1295 20.3227 11.3433 20.4906 11.5112C20.6584 11.679 20.8723 11.7932 21.1051 11.8395C21.3379 11.8857 21.5792 11.8619 21.7985 11.771C22.0177 11.6801 22.2051 11.5263 22.3369 11.3289C22.4688 11.1315 22.5391 10.8994 22.539 10.662C22.539 9.99953 22.0015 9.46244 21.339 9.46244ZM10.8654 16.0001C10.8654 13.164 13.1649 10.8645 16.0009 10.8645C18.837 10.8645 21.1358 13.164 21.1358 16.0001C21.1358 18.8362 18.837 21.1345 16.0009 21.1345C13.1649 21.1345 10.8654 18.8362 10.8654 16.0001ZM16.0009 12.6667C17.8418 12.6667 19.3343 14.159 19.3343 16.0001C19.3343 17.8409 17.8418 19.3335 16.0009 19.3335C14.1599 19.3335 12.6676 17.8409 12.6676 16.0001C12.6676 14.159 14.1599 12.6667 16.0009 12.6667Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
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
				<button className="px-4 py-3 font-semibold text-neutral-100 rounded-3xl bg-stone-800 min-w-[48px]">
					Follow
				</button>
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
