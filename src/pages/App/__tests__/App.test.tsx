import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	test("should render TestComponent", () => {
		render(<App />);

		const element = screen.queryByText("Hey");

		expect(element).toBeInTheDocument();
	});
});
