interface MyComponentProps {
	children?: React.ReactNode;
}

function MyComponent({ children }: MyComponentProps) {
	return (
		<div style={{ border: "1px solid yellow", padding: 8 }}>
			<h2>Hello from my component</h2>
			<p>lol this is also my component</p>
			{children}
		</div>
	);
}

export default MyComponent;
