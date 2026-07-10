import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: triggers scroll on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default ScrollToTop;
