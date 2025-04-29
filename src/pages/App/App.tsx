import styled from "@emotion/styled";
import FitWipTheme from "../../shared/components/FitWipTheme/FitWipTheme";
import { TestPage } from "../TestPage";

const AppContainer = styled("div")();

function App() {
	return (
		<FitWipTheme>
			<AppContainer>
				<TestPage />
			</AppContainer>
		</FitWipTheme>
	);
}

export default App;
