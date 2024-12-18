import { useRouter } from "@tanstack/react-router";

import { RiArrowLeftLine } from "react-icons/ri";

function SubPageHeader() {
	const router = useRouter();

	const handleClickBack = () => {
		router.history.back();
	};

	return (
		<div className="absolute top-0 max-w-screen-sm px-2 pt-4 ml-auto mr-auto">
			<button onClick={handleClickBack}>
				<RiArrowLeftLine size="20" />
			</button>
		</div>
	);
}

export default SubPageHeader;
