import { type ImageUrlType, imageUrl } from "~/utils/image";
interface ImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		ImageUrlType {
	high?: boolean;
}

function Image({ file, quality = 70, size, high, ...props }: ImageProps) {
	const src = imageUrl({ quality, size, file });
	return (
		<img
			src={src}
			fetchPriority={high ? "high" : "auto"}
			loading={high ? "eager" : "lazy"}
			{...props}
		></img>
	);
}

export default Image;
