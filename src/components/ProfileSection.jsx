import { forwardRef } from "react";
import Image from "~/components/Image";
import { imageUrl } from "~/utils/image";

const ProfileSection = forwardRef(function ProfileSection(_, ref) {
	return (
		<div ref={ref} className="relative flex flex-col items-center sm:pt-4">
			<picture>
				<source
					srcSet={imageUrl({ file: "web.png" })}
					type="image/webp"
					media="(min-width: 640px)"
					height="145"
					width="640"
				/>
				<source
					srcSet="/image/web.png"
					type="image/png"
					media="(min-width: 640px)"
					height="145"
					width="640"
				/>
				<source
					srcSet={imageUrl({ file: "m_logo2.png" })}
					type="image/webp"
					height="170"
					width="640"
				/>
				<Image
					file="m_logo2.png"
					className="sm:rounded-tr-3xl sm:rounded-tl-3xl min-h-[175px] sm:min-h-[145px]"
					high
					height="170"
					width="640"
					alt="배경 이미지"
				/>
			</picture>

			{/* Gradient overlay for bottom blend */}
			<div
				className="absolute bottom-0 left-0 right-0 h-[70%]"
				style={{
					background:
						"linear-gradient(to bottom, transparent, var(--color-primary))",
					pointerEvents: "none",
				}}
			/>
		</div>
	);
});

export default ProfileSection;
