import { forwardRef } from "react";
import Image from "~/components/Image";
import { imageUrl } from "~/utils/image";

const ProfileSection = forwardRef(function ProfileSection(_, ref) {
	return (
		<div ref={ref} className="relative flex flex-col items-center sm:pt-4">
			<picture>
				<source
					srcSet={imageUrl({ file: "web_logo.png" })}
					media="(min-width: 640px)"
				/>
				<Image
					file="m_logo.png"
					className="sm:rounded-tr-3xl sm:rounded-tl-3xl"
					high
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
