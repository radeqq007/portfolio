import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { TransitionProvider } from "@/components/TransitionProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TransitionProvider>
			<BrowserRouter basename="/portfolio">
				<App />
			</BrowserRouter>
		</TransitionProvider>
	</StrictMode>,
);
