import { createFileRoute } from "@tanstack/react-router";
import Image from "~/components/Image";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/relation")({
	component: Relation,
});

function Relation() {
	return (
		<SubPageTemplate title="인물관계도">
			<Image file="relation.png" alt="인물관계도" high />
		</SubPageTemplate>
	);
}
