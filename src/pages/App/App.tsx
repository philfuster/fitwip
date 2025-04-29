import styled from "@emotion/styled";
import { TestComponent } from "../../shared/components";
import { Global, css } from "@emotion/react";

const AppContainer = styled("div")();

// Define global styles outside the component to avoid re-creation on every render
const globalStyles = css({
	"*, *:before, *:after": {
		boxSizing: "border-box",
	},
	"*": {
		margin: 0
	},
	"@media (prefers-reduced-motion: no-preference)": {
		"html": {
			interpolateSize: "allow-keywords",
		},
	},
	body: {
		lineHeight: "1.5",
		WebkitFontSmoothing: "antialiased", // Antialiasing
		MozOsFontSmoothing: "grayscale", // Antialiasing
	},
	"img, picture, video, canvas, svg": {
		display: "block",
		maxWidth: "100%",
	},
	"input, button, textarea, select": {
		font: "inherit",
	},
	"p, h1, h2, h3, h4, h5, h6": {
		overflowWrap:"break-word"
	},
	"p": {
		textWrap: "pretty"
	},
	"h1, h2, h3, h4, h5, h6": {
		textWrap: "balance"
	},
	"#root, #__next": {
		isolation: "isolate"
	}
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
