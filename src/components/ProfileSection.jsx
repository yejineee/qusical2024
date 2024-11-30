import React from "react";
import { forwardRef } from "react";
import PROFILE_IMAGE from "/image/profile.png";
import CertifiedIcon from "./icon/CertifiedIcon";

const ProfileSection = forwardRef(function ProfileSection(_, ref) {
	return (
		<div ref={ref} className="flex flex-col items-center">
			<div className="mb-4">
				<img src={PROFILE_IMAGE} width={96} height={96}></img>
			</div>
			<div className="flex relative justify-center items-center px-5 mb-2 text-xl font-hambak">
				유다
				<div className="absolute right-0">
					<CertifiedIcon />
				</div>
			</div>
			<div className="flex flex-col gap-0.5 items-center">
				<div className="font-hambak">"그는 나보다 옳도다"의 고백</div>
				<span className="text-sm">우리들교회 판교채플</span>
				<span className="text-sm">2025.01.08, 2025.01.11</span>
			</div>
		</div>
	);
});

export default ProfileSection;
