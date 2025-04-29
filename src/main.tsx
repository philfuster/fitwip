import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App";

// biome-ignore lint/style/noNonNullAssertion: It's definitely there
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
