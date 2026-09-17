import { useCallback, useEffect, useRef } from "react";

const FILL_COLOR = "#212032";
const CIRCLE_SIZE = 30;
const CIRCLE_RADIUS = 1.8;
const PROXIMITY = 200;
const GROWTH = 5;
const EASE = 0.08;

class CircleParticle {
	radius: number;
	growthValue = 0;

	constructor(
		public readonly baseRadius: number,
		public readonly x: number,
		public readonly y: number,
	) {
		this.radius = baseRadius;
	}

	setGrowth(value: number) {
		this.growthValue = value;
	}

	draw(ctx: CanvasRenderingContext2D, ease: number) {
		this.radius += (this.baseRadius + this.growthValue - this.radius) * ease;
		ctx.moveTo(this.x + this.radius, this.y);
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	}
}

function normalize(value: number, min: number, max: number) {
	return (value - min) / (max - min);
}

function interpolate(value: number, min: number, max: number) {
	return min + (max - min) * value;
}

function map(
	value: number,
	min1: number,
	max1: number,
	min2: number,
	max2: number,
) {
	return interpolate(normalize(value, min1, max1), min2, max2);
}

const Background = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const circlesRef = useRef<CircleParticle[]>([]);
	const pointerRef = useRef({ x: -9999, y: -9999 });

	const buildGrid = useCallback((canvas: HTMLCanvasElement) => {
		const columns = Math.ceil(canvas.width / CIRCLE_SIZE) + 1;
		const rows = Math.ceil(canvas.height / CIRCLE_SIZE) + 1;
		const amount = columns * rows;
		const circles: CircleParticle[] = [];
		for (let i = 0; i < amount; i++) {
			const column = i % columns;
			const row = Math.floor(i / columns);
			circles.push(
				new CircleParticle(
					CIRCLE_RADIUS,
					CIRCLE_SIZE * column,
					CIRCLE_SIZE * row,
				),
			);
		}
		circlesRef.current = circles;
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;

		const setup = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			buildGrid(canvas);
		};

		setup();

		const onMouseMove = (e: MouseEvent) => {
			pointerRef.current = { x: e.clientX, y: e.clientY };
		};
		const onTouchMove = (e: TouchEvent) => {
			const touch = e.touches[0];
			if (touch) pointerRef.current = { x: touch.clientX, y: touch.clientY };
		};
		const onResize = () => setup();

		window.addEventListener("resize", onResize);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("touchmove", onTouchMove, { passive: true });

		let raf = 0;
		const draw = () => {
			const { x: px, y: py } = pointerRef.current;

			for (const circle of circlesRef.current) {
				const dx = circle.x - px;
				const dy = circle.y - py;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const grown = map(
					distance,
					circle.baseRadius,
					circle.baseRadius + PROXIMITY,
					GROWTH,
					0,
				);
				circle.setGrowth(Math.max(grown, 0));
			}

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.fillStyle = FILL_COLOR;
			for (const circle of circlesRef.current) {
				circle.draw(ctx, EASE);
			}
			ctx.fill();

			raf = requestAnimationFrame(draw);
		};

		raf = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("touchmove", onTouchMove);
		};
	}, [buildGrid]);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none"
		/>
	);
};

export default Background;
