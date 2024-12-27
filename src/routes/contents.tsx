import { createFileRoute } from "@tanstack/react-router";
import { RiInformation2Line } from "react-icons/ri";
import Icon from "~/components/Icon";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/contents")({
	component: Contents,
});

function Divider() {
	return <hr className="w-6 border-[0.5px] opacity-50 border-stone-500" />;
}

const contents = [
	"찬양",
	'큐지컬 "유다" 공연',
	'"유다" 메시지',
	"간증",
	"기도",
];

function Contents() {
	return (
		<SubPageTemplate title="공연순서">
			<div className="container-sub">
				<div className="flex items-center gap-2 text-xs text-zinc-700">
					<RiInformation2Line />
					구체적인 시간은 추후 업데이트될 예정입니다.
				</div>
				<div className="flex items-center justify-center w-full h-full pt-32">
					<ul className="flex flex-col items-center gap-4 font-semibold">
						{contents.map((content, index) => (
							<>
								{index !== 0 && <Divider />}
								<li>{content}</li>
							</>
						))}
					</ul>
				</div>
			</div>
		</SubPageTemplate>
	);
}
