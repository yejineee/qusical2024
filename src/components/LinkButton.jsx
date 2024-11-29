function LinkButton({ onClick, children }) {
	return (
		<button
			className="w-full h-12 bg-white rounded-3xl shadow-md"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default LinkButton;
