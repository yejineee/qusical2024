import { forwardRef } from "react";
import PROFILE_IMAGE from "/image/profile.png";
import CertifiedIcon from "./icon/CertifiedIcon";

const ProfileSection = forwardRef(function ProfileSection(_, ref) {
	return (
		<div ref={ref} className="flex flex-col items-center">
			<div className="mb-4">
				<img src={PROFILE_IMAGE} width={96} height={96}></img>
			</div>
			<div className="relative flex items-center justify-center px-5 text-xl font-hambak">
				유다
				<div className="absolute right-0">
					<CertifiedIcon />
				</div>
			</div>
			<div className="flex flex-col gap-0.5 items-center">
				<div className="mb-2 font-hambak">"그는 나보다 옳도다"의 고백</div>
				<div className="grid gap-x-2  text-sm grid-cols-[1fr,auto]">
					<span>📍2025.01.08</span>
					<div className="grid grid-cols-2 gap-x-0.5">
						<span>10:00 AM,</span>
						<span>07:30 PM</span>
					</div>
					<span>📍2025.01.11</span>
					<div className="grid grid-cols-2 gap-x-0.5">
						<span>11:00 AM,</span>
						<span>03:00 PM</span>
					</div>
				</div>
				<span className="text-sm">우리들교회 판교채플</span>
			</div>
		</div>
	);
});

export default ProfileSection;
