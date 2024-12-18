import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";
export const Route = createFileRoute("/story")({
	component: Story,
});

function Story() {
	return <SubPageTemplate title="줄거리">{""}</SubPageTemplate>;
}
