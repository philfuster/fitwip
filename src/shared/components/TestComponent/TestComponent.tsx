interface TestComponentProps {
	children?: React.ReactNode;
}

function TestComponent({ children }: TestComponentProps) {
	return (
		<div className="card" style={{ border: "1px solid yellow" }}>
			<h2>Hello from my component</h2>
			<p>lol this is also my component</p>
			{children}
		</div>
	);
}

export default TestComponent;
