function GridLinkItem() {
	return (
		<>
			<div className="flex flex-col gap-4 p-2 bg-white rounded-3xl shadow-md">
				<div className="flex flex-col justify-center items-center p-4 w-full h-full rounded-3xl bg-stone-800">
					<img
						src="/image/img1.jpg"
						className="object-cover w-16 h-16 rounded-full"
					></img>
					<div className="pt-2 text-white">title</div>
				</div>
				<div className="pb-2 pl-2 text-sm">빙봉</div>
			</div>
		</>
	);
}

export default GridLinkItem;
