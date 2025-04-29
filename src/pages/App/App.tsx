import styled from "@emotion/styled";
import { TestComponent } from "../../shared/components";
import { Global, css } from "@emotion/react";

const AppContainer = styled("div")();

// Define global styles outside the component to avoid re-creation on every render
const globalStyles = css({
	html: {
		boxSizing: "border-box",
	},
	"*, *:before, *:after": {
		boxSizing: "inherit",
	},
	body: {
		margin: 0,
		lineHeight: "1.2",
		overflowX: "hidden",
		WebkitFontSmoothing: "antialiased", // Antialiasing
		MoxOsFontSmoothing: "grayscale", // Antialiasing
	},
	a: {
		textDecoration: "none",
	},
	"a:hover": {
		textDecoration: "underline",
	},
	img: {
		maxWidth: "100%",
		height: "auto",
		width: "auto",
	},
});

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<AppContainer>
				<TestComponent />
				<p>Hey</p>
				<TestComponent />
			</AppContainer>
		</>
	);
}

export default App;
