import { isDev } from "./utils";

export type ImageUrlType = {
	file: string;
	quality?: number;
	size?: number;
};

const DAUM_CDN = "//i1.daumcdn.net/thumb/";
const IMAGE_URL = "https://qusical2025.vercel.app/image/";
const LOCAL_IMAGE_PATH = "/image/";
export const imageUrl = ({ quality = 70, size, file }: ImageUrlType) => {
	if (isDev) {
		return `${LOCAL_IMAGE_PATH}${file}`;
	}
	const crop = size ? `C${size}x${size}` : "";
	const option = encodeURIComponent(`${crop}@2x.fwebp.q${quality}`);
	const filePath = encodeURIComponent(`${IMAGE_URL}${file}`);
	const src = `${DAUM_CDN}${option}/?fname=${filePath}`;

	return src;
};
