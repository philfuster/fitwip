import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App";

// biome-ignore lint/style/noNonNullAssertion: root is in the DOM - checkout `../index.html`.
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
