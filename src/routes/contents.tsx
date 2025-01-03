import { createFileRoute } from "@tanstack/react-router";
import { RiExternalLinkLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import BlockContainer from "~/components/BlockContainer";
import SubPageTemplate from "~/components/SubPageTemplate";
import { URL } from "~/constants";
export const Route = createFileRoute("/contents")({
	component: Contents,
});

const MAP = {
	판교: "https://naver.me/FBe2BAdI",
	대구: "https://naver.me/5pwolRsq",
	광주: "https://naver.me/5hucOMuL",
};

const contents = ["찬양", "큐지컬 공연", "메시지", "간증", "기도"];

const times = [
	"2025.01.08 (수) 오전 10시",
	"2025.01.08 (수) 오후 7시 30분",
	"2025.01.11 (토) 오전 11시",
	"2025.01.11 (토) 오후 3시",
];

function Contents() {
	return (
		<SubPageTemplate title="공연안내" shareURL={URL.CONTENTS}>
			<div className="container-sub">
				<div className="flex flex-col gap-4 sm:gap-8">
					<ContentsBox title="공연 장소 / 중계">
						<TextList
							textList={[
								<div className="flex items-center">
									우리들교회 판교채플 &nbsp;
									<MapLink link={MAP.판교} />
								</div>,
								<>
									중계:{" "}
									<div className="flex items-center">
										광주채플 &nbsp;
										<MapLink link={MAP.광주} />,
									</div>
									&nbsp;
									<div className="flex items-center">
										대구채플 &nbsp;
										<MapLink link={MAP.대구} />
									</div>
								</>,
							]}
						></TextList>
					</ContentsBox>
					<ContentsBox title="공연 시간">
						<TextList textList={times} />
					</ContentsBox>
					<ContentsBox title="러닝타임">
						<TextList textList={["2시간"]} />
					</ContentsBox>
					<ContentsBox title="공연 순서">
						<TextList textList={contents} />
					</ContentsBox>
					<ContentsBox title="안내">
						<TextList
							textList={[
								"총 4회 무료공연입니다.",
								"별도의 예약제를 운영하지 않습니다.",
							]}
						/>
					</ContentsBox>
				</div>
			</div>
		</SubPageTemplate>
	);
}

function MapLink({ link }: { link: string }) {
	return (
		<a
			href={link}
			className="flex text-base underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			(지도
			<span className="pt-1">
				<RiExternalLinkLine />
			</span>
			)
		</a>
	);
}

function TextList({
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

function ContentsBox({
	title,
	children,
}: {
	title: string;
	children?: React.ReactNode;
}) {
	return (
		<BlockContainer>
			<div className="flex items-center justify-between pb-2 text-lg font-bold border-b-2 border-b-stone-200">
				{title}
			</div>
			{children}
		</BlockContainer>
	);
}
