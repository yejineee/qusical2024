import { createFileRoute } from "@tanstack/react-router";
import BlockContainer from "~/components/BlockContainer";
import Image from "~/components/Image";
import SubPageTemplate from "~/components/SubPageTemplate";

export const Route = createFileRoute("/daejangbu")({
	component: Daejangbu,
});

const Intro = () => (
	<article>
		<SubHeader>극단대장부</SubHeader>
		<BlockContainer className="text-lg break-keep">
			<b>“너는 힘써 대장부가 되고”</b>
			&nbsp;(열왕기상 2:2)
			<br />
			<br />
			극단대장부는 큐지컬(QT+Musical)을 제작하는 우리들교회의
			문화사역부서입니다.
			<br />
			<br />
			우리부터 말씀으로 살아나고, 그 은혜를 관객들에게 전하고자 합니다.
		</BlockContainer>
	</article>
);

const actor = {
	배우: `이경두 김대현 임현명 홍정인 최일웅 나희영 박경찬
김재우 박승주 전병훈 박예찬 박현지 김이영 신은정
문희준 서나은 박하진 김찬희 오유진
`,
};

const Actor = () => {
	return (
		<article>
			<SubHeader>큐지컬 {"<유다>"} 배우</SubHeader>
			<BlockContainer className="text-lg break-keep">
				<div>{actor.배우}</div>
			</BlockContainer>
		</article>
	);
};

const staff = {
	사역자: "김오석 김평화",
	연출: "이경두",
	본부: "김용희 박하진",
	작가: "서나은 박혜령",
	운영: "송기호 심영보 맹우진 성기현",
	안무: "신은정 문희준 김재우",
	의상: "송다인 유서연 신은수 변예린",
	영상: "김찬희 오혜명 김환희 박지인 김예은",
	마케팅: "양예진 오승희 윤혜서 김미정",
	디자인: "윤혜령 김병욱 권순찬 최지연 김아영 이한별 김연두",
	"무대/소품": "조은상 이동엽 전수현 김영민 이정현 이유성 임예림",
};

const Staff = () => {
	return (
		<article>
			<SubHeader>큐지컬 {"<유다>"} 스태프</SubHeader>
			<BlockContainer className="flex flex-col gap-1 text-lg divide-y break-keep">
				{Object.entries(staff).map(([role, names]) => (
					<div key={role} className="grid grid-cols-4 p-1">
						<b className="col-span-1">{role}</b>
						<div className="col-start-2 col-span-full">{names}</div>
					</div>
				))}
			</BlockContainer>
		</article>
	);
};

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
	high,
}: {
	title: string;
	file?: string;
	youtubeURL?: string;
	high?: boolean;
}) {
	return (
		<BlockContainer>
			<div className="flex items-center">
				<div className="text-lg font-semibold">{title}</div>
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
				high
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
			<HistoryBlock
				title="시즌6 ‘유다’ (2025년 1월)"
				file="q6.png"
				youtubeURL="https://youtu.be/MXlcOGuQkFM?feature=shared"
			/>
		</ul>
	</div>
);

function Daejangbu() {
	return (
		<SubPageTemplate title="극단대장부">
			<div className="flex flex-col gap-8 container-sub">
				<Intro />
				<Actor />
				<Staff />
				<History />
			</div>
		</SubPageTemplate>
	);
}
