import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/daejangbu")({
	component: Daejangbu,
});

function Daejangbu() {
	return <SubPageTemplate title="극단대장부">{""}</SubPageTemplate>;
}
