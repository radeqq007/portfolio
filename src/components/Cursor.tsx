import gsap from "gsap";
import { useEffect, useRef } from "react";

const PRESSED_DOWN_SCALE_FACTOR = 0.8

const Cursor = () => {
	const cursor = useRef<HTMLDivElement>(null);
	const curScale = useRef<number>(1);
	const isPressedDown = useRef<boolean>(false);

	useEffect(() => {
		const cursorFollower = (e: MouseEvent) => {
			gsap.to(cursor.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.2,
				ease: "power1.out",
			});
		};

		const onMouseEnter = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.closest('[data-cursor="expand"]')) {
				gsap.to(cursor.current, {
					scale: isPressedDown.current ? 3 * PRESSED_DOWN_SCALE_FACTOR : 3,
					duration: 0.4,
					ease: "back.out",
				});
				curScale.current = 3;
			}

			if (target.closest('[data-cursor="shrink"]')) {
				gsap.to(cursor.current, {
					scale: isPressedDown.current ? 0.8 * PRESSED_DOWN_SCALE_FACTOR : 0.8,
					duration: 0.4,
					ease: "back.out",
				});
				curScale.current = 0.8;
			}
		};

		const onMouseLeave = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.closest('[data-cursor="expand"]') ||
				target.closest('[data-cursor="shrink"]')
			) {
				gsap.to(cursor.current, {
					scale: isPressedDown.current ? PRESSED_DOWN_SCALE_FACTOR : 1,
					duration: 0.4,
					ease: "back.out",
				});

				curScale.current = 1;
			}
		};

		const onMouseDown = () => {
			gsap.to(cursor.current, {
				scale: curScale.current * PRESSED_DOWN_SCALE_FACTOR,
				duration: 0.2,
			})
			isPressedDown.current = true
		}


		const onMouseUp = () => {
			gsap.to(cursor.current, {
				scale: curScale.current,
				duration: 0.2,
			})
			isPressedDown.current = false
		}

		const mm = gsap.matchMedia();

		mm.add("(pointer: fine)", () => {
			gsap.set(cursor.current, {
				xPercent: -50,
				yPercent: -50,
				display: "block",
			});
			window.addEventListener("mousemove", cursorFollower);
			window.addEventListener("mouseover", onMouseEnter);
			window.addEventListener("mouseout", onMouseLeave);

			window.addEventListener("mousedown", onMouseDown);
			window.addEventListener("mouseup", onMouseUp);

			return () => {
				window.removeEventListener("mousemove", cursorFollower);
				window.removeEventListener("mouseover", onMouseEnter);
				window.removeEventListener("mouseout", onMouseLeave);
			};
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<div
			ref={cursor}
			className="hidden w-6 h-6 top-0 left-0 pointer-events-none bg-cursor fixed z-50 rounded-full mix-blend-difference"
		></div>
	);
};

export default Cursor;
