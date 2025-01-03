import { useRouter } from "@tanstack/react-router";

import { RiArrowLeftLine } from "react-icons/ri";

function SubPageHeader({ title }: { title?: string }) {
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
					<RiArrowLeftLine size="20" />
				</button>
				{title && (
					<>
						<div className="flex justify-center text-lg font-semibold sm:text-xl">
							{title}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default SubPageHeader;
