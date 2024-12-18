import SubPageHeader from "~/components/SubPageHeader";

interface Props {
	title: string;
	children: React.ReactNode;
}

function SubPageTemplate({ title, children }: Props) {
	return (
		<>
			<SubPageHeader />
			<article>
				<div className="flex justify-center mb-8">
					<h2 className="text-xl font-semibold">{title}</h2>
				</div>
				{children}
			</article>
		</>
	);
}

export default SubPageTemplate;
