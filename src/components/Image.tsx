interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	file: string;
	quality?: number;
	size?: number;
}

const DAUM_CDN = "//i1.daumcdn.net/thumb/";
const IMAGE_URL = "https://qusical2025.vercel.app/image/";

function Image({ file, quality = 70, size, ...props }: ImageProps) {
	const option = encodeURIComponent(`C${size}x${size}.fwebp`);
	const filePath = encodeURIComponent(`${IMAGE_URL}${file}`);
	const src = `${DAUM_CDN}${option}/?fname=${filePath}`;
	return <img src={src} {...props}></img>;
}

export default Image;
