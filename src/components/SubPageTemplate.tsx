import SubPageHeader from "~/components/SubPageHeader";
import { twMerge } from "tailwind-merge";
interface Props {
	title: string;
	children: React.ReactNode;
	className?: string;
}

function SubPageTemplate({ title, children, className }: Props) {
	return (
		<div
			style={{
				background: "radial-gradient(circle, white, var(--color-primary))",
			}}
		>
			<div className={twMerge("container-width container-height", className)}>
				<SubPageHeader title={title} />
				<div className="pt-12">{children}</div>
			</div>
		</div>
	);
}

export default SubPageTemplate;
