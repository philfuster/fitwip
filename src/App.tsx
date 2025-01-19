import styled from "@emotion/styled";
import "./App.css";
import { TestComponent } from "./shared/components";
import { Global } from "@emotion/react";

const AppContainer = styled("div")({ width: "100%" });

function App() {
	return (
		<>
			<Global
				styles={{
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
						WebkitFontSmoothing: "antialiased", // Antialisasing
						MoxOsFontSmoothing: "grayscale", // Antialisasing
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
				}}
			/>
			<AppContainer>
				<TestComponent />
				<p>Hey</p>
				<TestComponent />
			</AppContainer>
		</>
	);
}

export default App;
