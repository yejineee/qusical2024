import Test from "@/components/Test";

function App() {
	return (
		<div className="p-4">
			<div className="h-[50vh] w-100">
				<img
					className="object-scale-down w-full h-full"
					src="/image/main.png"
					alt="메인 이미지"
				/>
			</div>
			<div className="flex flex-col justify-center">
				<p>2024 큐지컬</p>&nbsp;
				<strong className="text-lg font-extrabold">유다</strong>
			</div>
			<Test />
			<div></div>
		</div>
	);
}

export default App;
