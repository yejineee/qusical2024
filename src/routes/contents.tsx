import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/contents")({
	component: Contents,
});

function Contents() {
	return <SubPageTemplate title="공연순서">{""}</SubPageTemplate>;
}
