import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/relation")({
	component: Relation,
});

function Relation() {
	return (
		<SubPageTemplate title="인물관계도">
			<img src="/image/relation.png" alt="인물관계도" />
		</SubPageTemplate>
	);
}
