import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";
import BlockContainer from "~/components/BlockContainer";
import Image from "~/components/Image";

export const Route = createFileRoute("/daejangbu")({
	component: Daejangbu,
});

const Intro = () => (
	<article>
		<SubHeader>극단대장부</SubHeader>
		<b>“너는 힘써 대장부가 되고”</b>
		&nbsp;(열왕기상 2:2)
		<br />
		<br />
		극단대장부는 큐지컬(QT+Musical)을 제작하는 우리들교회의 문화사역부서입니다.
		<br />
		<br />
		우리부터 말씀으로 살아나고, 그 은혜를 관객들에게 전하고자 합니다.
	</article>
);

function HistoryYoutubeBottom({ url }: { url: string }) {
	{
		return (
			<div className="flex items-center justify-end">
				<a
					className="px-4 py-3 font-semibold rounded-3xl border border-stone-800 min-w-[48px] active:bg-slate-400"
					href={url}
					target="_blank"
				>
					Youtube
				</a>
			</div>
		);
	}
}

function HistoryBlock({
	title,
	file,
	youtubeURL,
}: {
	title: string;
	file?: string;
	youtubeURL?: string;
}) {
	return (
		<BlockContainer>
			<div className="flex items-center">
				<div className="font-semibold text-md">{title}</div>
			</div>
			<div className="my-4">{file && <Image file={file} alt={title} />}</div>
			{youtubeURL && <HistoryYoutubeBottom url={youtubeURL} />}
		</BlockContainer>
	);
}

function SubHeader({ children }: { children: React.ReactNode }) {
	return <h2 className="pb-4 text-xl font-bold">{children}</h2>;
}

const History = () => (
	<div>
		<SubHeader>큐지컬 히스토리</SubHeader>
		<ul className="flex flex-col gap-4">
			<HistoryBlock
				title="시즌1 ‘기업 무르기’ (2018년 1월)"
				file="q1.jpeg"
				youtubeURL="https://youtu.be/h-WADSaff3Q?si=JJmfZ9bcM4WWGGOo"
			></HistoryBlock>
			<HistoryBlock
				title="시즌2 ‘압살롬의 기념비’ (2019년 1월)"
				file="q2.jpg"
				youtubeURL="https://youtu.be/UDU07D2B8lc?si=1cieXGa4VLmysE_7"
			/>
			<HistoryBlock title="시즌3 ‘갈멜’ (2020년 1월)" file="q3.jpeg" />
			<HistoryBlock
				title="시즌4 ‘증인’ (2022년 12월)"
				file="q4.jpeg"
				youtubeURL="https://youtu.be/2lc8R_Xsa30?si=dGGQHtreS9Q0MYEE"
			/>
			<HistoryBlock
				title="시즌5 ‘상속자’ (2024년 1월)"
				file="q5.jpg"
				youtubeURL="https://youtu.be/N75TlmEqhqs?si=VVJDTbz17Ja5FpJa"
			/>
			<HistoryBlock title="시즌6 ‘증인’ (2025년 1월)" file="q6.png" />
		</ul>
	</div>
);

function Daejangbu() {
	return (
		<SubPageTemplate title="극단대장부">
			<div className="flex flex-col gap-8 container-sub">
				<Intro />
				<History />
			</div>
		</SubPageTemplate>
	);
}
