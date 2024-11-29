import React from "react";

const PROFILE_IMAGE_URL =
	"https://t1-sandbox.kakaocdn.net/thumb/C100x100@2x.fwebp.q75/?fname=https%3A%2F%2Ft1-sandbox.kakaocdn.net%2Fone%2Fprofile%2F20241126120915-7d0e8a83-0631-4674-abf0-4f94cec71421.png";
const ProfileSection = () => {
	return (
		<div className="flex flex-col items-center">
			<img src={PROFILE_IMAGE_URL} width={96} height={96}></img>
		</div>
	);
};

export default ProfileSection;
