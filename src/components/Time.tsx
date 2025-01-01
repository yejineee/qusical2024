import { RiCalendar2Fill, RiMapPinLine } from "react-icons/ri";
import BlockContainer from "./BlockContainer";
import Icon from "./Icon";

function DateItem({ date, time }: { date: string; time: string }) {
	return (
		<div className="grid grid-cols-8 sm:grid-cols-11 text-sm sm:text-base  gap-x-[0.5px]">
			<span className="col-span-4 font-semibold sm:col-span-5">{date}</span>
			<span className="col-start-5 col-span-full sm:col-start-9">{time}</span>
		</div>
	);
}

function Time() {
	return (
		<BlockContainer>
			<div className="flex items-center justify-between pb-2 border-b-2 border-b-stone-200 sm:text-lg">
				<div className="font-semibold">공연 일정</div>
				<div className="flex items-center text-sm sm:text-base">
					<Icon className="w-4 mr-1 sm:w-[1.25rem]">
						<RiMapPinLine />
					</Icon>
					우리들교회 판교채플
				</div>
			</div>
			<div className="pt-2">
				<DateItem date="2025.01.08 수요일" time="오전 10시, 오후 7시 30분" />
				<DateItem
					date="2025.01.11 토요일"
					time="오전 11시,
					오후 3시"
				/>
			</div>
		</BlockContainer>
	);
}

export default Time;
