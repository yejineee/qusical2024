import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/relation")({
	component: Relation,
});

function Relation() {
	return (
		<SubPageTemplate title="인물관계도">
			<img
				fetchPriority="high"
				src="https://t1.kakaocdn.net/thumb/@2x.fwebp.q75/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fone%2Fprofile%2F20241225030554-54335664-b76e-40b3-8363-d9935aad37f6.png"
				alt="인물관계도"
			/>
		</SubPageTemplate>
	);
}
