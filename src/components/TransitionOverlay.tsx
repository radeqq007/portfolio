import { forwardRef, type Ref } from "react";

const TransitionOverlay = forwardRef((_, ref) => {
	return (
		<div
			ref={ref as Ref<HTMLDivElement>}
			id="overlay"
			className="fixed h-screen w-[200vw] bg-highlight z-[999] -translate-x-full top-0"
			style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
		></div>
	);
});

export default TransitionOverlay;
