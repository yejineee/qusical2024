import { createFileRoute } from "@tanstack/react-router";
import Image from "~/components/Image";
import SubPageTemplate from "~/components/SubPageTemplate";
import { URL } from "~/constants";

export const Route = createFileRoute("/relation")({
	component: Relation,
});

function Relation() {
	return (
		<SubPageTemplate title="인물관계도" shareURL={URL.RELATION}>
			<div className="flex w-full mx-auto mt-4">
				<Image file="relation21.png" alt="인물관계도" high />
			</div>
		</SubPageTemplate>
	);
}
