import { Route, Routes } from "react-router";
import Cursor from "@/components/Cursor";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div className="min-h-screen min-w-screen md:h-screen">
			<ScrollToTop />
			<Cursor />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
