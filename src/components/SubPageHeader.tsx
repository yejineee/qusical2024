import { useRouter } from "@tanstack/react-router";

import { RiArrowLeftLine } from "react-icons/ri";

function SubPageHeader({ title }: { title?: string }) {
	const router = useRouter();

	const handleClickBack = () => {
		router.history.back();
	};

	return (
		<>
			<div className="absolute flex justify-between max-w-screen-sm ml-auto mr-auto top-4 left-4 right-4">
				<button onClick={handleClickBack}>
					<RiArrowLeftLine size="20" />
				</button>
				{title && (
					<>
						<div className="font-semibold text-md">{title}</div>
						<div></div>
					</>
				)}
			</div>
		</>
	);
}

export default SubPageHeader;
