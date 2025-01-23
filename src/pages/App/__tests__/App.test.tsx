import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	test("should render TestComponent", () => {
		render(<App />);
		expect(screen.queryByText("hey")).toBeDefined();
	});
});
