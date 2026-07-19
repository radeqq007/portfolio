import gsap from "gsap";
import { useRef } from "react";
import TransitionOverlay from "@/components/TransitionOverlay";
import { TransitionContext } from "@/hooks/useTransition";

type Props = {
	children: React.ReactNode;
};

export const TransitionProvider = ({ children }: Props) => {
	const overlayRef = useRef<HTMLDivElement>(null);

	const play = (callback?: () => void) => {
		if (!overlayRef.current) return;

		const tl = gsap.timeline();
		const duration = 2.4;

		tl.set(overlayRef.current, { translateX: "-100%" })
			.to(overlayRef.current, {
				ease: "power4.in",
				duration: duration * 0.4,
				translateX: "-40%",
				onComplete: () => {
					if (callback) callback();
				},
			})
			.to(overlayRef.current, {
				ease: "power4.out",
				duration: duration * 0.6,
				translateX: "100%",
				onComplete: () => {
					overlayRef.current!.style.transform = "translateX(-100%)";
				},
			});
	};

	return (
		<TransitionContext.Provider value={{ play }}>
			{children}
			<TransitionOverlay ref={overlayRef} />
		</TransitionContext.Provider>
	);
};
