import { twMerge } from "tailwind-merge";
import SubPageHeader from "~/components/SubPageHeader";
interface Props {
	title: string;
	children: React.ReactNode;
	className?: string;
	shareURL?: string;
}

function SubPageTemplate({ title, children, className, shareURL }: Props) {
	return (
		<div
			style={{
				background: "radial-gradient(circle, white, var(--color-primary))",
			}}
		>
			<div className={twMerge("container-width container-height", className)}>
				<SubPageHeader title={title} shareURL={shareURL} />
				<div className="pt-12">{children}</div>
			</div>
		</div>
	);
}

export default SubPageTemplate;
