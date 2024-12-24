import SubPageHeader from "~/components/SubPageHeader";

interface Props {
	title: string;
	children: React.ReactNode;
}

function SubPageTemplate({ title, children }: Props) {
	return (
		<>
			<SubPageHeader title={title} />
			<article>{children}</article>
		</>
	);
}

export default SubPageTemplate;
