import SubPageHeader from "~/components/SubPageHeader";

interface Props {
	title: string;
	children: React.ReactNode;
}

function SubPageTemplate({ title, children }: Props) {
	return (
		<>
			<SubPageHeader title={title} />
			<div className="pt-12">{children}</div>
		</>
	);
}

export default SubPageTemplate;
