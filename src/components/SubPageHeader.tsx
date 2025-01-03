import { useRouter } from "@tanstack/react-router";
import BaseShare from "~/components/BaseShare";
import { RiArrowLeftLine } from "react-icons/ri";

const ICON_SIZE = 20;
function SubPageHeader({
	title,
	shareURL,
}: { title?: string; shareURL?: string }) {
	const router = useRouter();

	const handleClickBack = () => {
		console.log(router.history.length);
		if (router.history.length <= 1) {
			return router.navigate({ to: "/" });
		}

		router.history.back();
	};

	return (
		<>
			<div className="absolute grid grid-cols-3 grid-rows-1 p-4 container-width">
				<button onClick={handleClickBack}>
					<RiArrowLeftLine size={ICON_SIZE} />
				</button>
				{title && (
					<div className="flex justify-center text-lg font-semibold sm:text-xl">
						{title}
					</div>
				)}
				{!!shareURL && (
					<div className="flex items-center justify-end">
						<BaseShare
							className="p-2 rounded-full bg-opacity-10 bg-neutral-300"
							url={shareURL}
							iconSize={ICON_SIZE}
						/>
					</div>
				)}
			</div>
		</>
	);
}

export default SubPageHeader;
