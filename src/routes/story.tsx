import { createFileRoute } from "@tanstack/react-router";
import SubPageTemplate from "~/components/SubPageTemplate";
export const Route = createFileRoute("/story")({
	component: Story,
});

function Story() {
	return (
		<SubPageTemplate title="줄거리">
			<div className="px-4">
				어릴적부터 채색옷을 입으며 아버지의 편애 속에서 자란 요셉은 형제들의
				시기를 받습니다. 형제들은 요셉을 구덩이에 빠뜨려 죽이려 합니다. 하지만
				유다의 제안으로 요셉은 가까스로 목숨을 구하고 애굽 상인에게 팔려갑니다.
				<br />
				<br />
				요셉을 팔아 넘긴 죄책감에 괴로워하던 유다는 집을 떠나게 됩니다. 유다의
				삶은 시련의 연속이었습니다. 두 아들이 연이어 죽고, 며느리 다말은 약속한
				셋째 아들과의 결혼을 기다리다 지쳐갔습니다.
				<br />
				<br />
				절망 속에서 다말은 대를 잇기 위해 유다의 자녀를 임신했습니다. 이 소식을
				듣고 유다는 분노했지만, 곧 자신의 증표를 확인하고 ‘그는 나보다 옳도다’의
				고백을 하며 회개합니다.
				<br />
				<br />
				그리고 7년의 대기근이 찾아옵니다. 살기 위해 막내 베냐민과 함께 애굽으로
				떠난 형제들은 애굽의 총리가 된 요셉 앞에서 두려워 떨었습니다. 요셉은
				형들을 안심시키며 하나님이 자신을 애굽으로 보내신 이유는 생명을 구원하기
				위한 뜻이었음을 고백했습니다.
				<br />
				<br />
				아내와 아들들을 잃고 방황하던 유다에게 하나님은 영적 후사를
				허락하심으로써 그분의 놀라운 구원 계획을 보여주셨습니다. 세월이 흘러
				유다의 혈통에서 다윗 왕조가 일어나고, 마침내 예수 그리스도가 오시게
				됩니다.
			</div>
		</SubPageTemplate>
	);
}
