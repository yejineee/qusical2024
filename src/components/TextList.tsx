import { twMerge } from "tailwind-merge";
export default function TextList({
	textList,
	className,
}: {
	className?: string;
	textList: React.ReactNode[];
}) {
	return (
		<ul className={twMerge("flex flex-col w-full text-lg divide-y", className)}>
			{textList.map((text) => (
				<li className="flex justify-center py-2">{text}</li>
			))}
		</ul>
	);
}
