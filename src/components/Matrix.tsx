import { useEffect, useRef } from "react";

const FONT_SIZE = 12;
const ALPHABET =
	"ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const MatrixRain = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;

		let rainDrops: number[] = [];

		const setup = () => {
			const rect = canvas.parentElement?.getBoundingClientRect();
			canvas.width = rect?.width || window.innerWidth;
			canvas.height = rect?.height || window.innerHeight;

			const columns = Math.floor(canvas.width / FONT_SIZE);
			rainDrops = Array.from(
				{ length: columns },
				(_, i) => rainDrops[i] ?? Math.floor(Math.random() * -100),
			);
		};

		setup();
		window.addEventListener("resize", setup);

		const draw = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#cfd0d4";
			ctx.font = `${FONT_SIZE}px monospace`;

			for (let i = 0; i < rainDrops.length; i++) {
				const text = ALPHABET.charAt(
					Math.floor(Math.random() * ALPHABET.length),
				);
				ctx.fillText(text, i * FONT_SIZE, rainDrops[i] * FONT_SIZE);

				if (rainDrops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
					rainDrops[i] = 0;
				}
				rainDrops[i]++;
			}
		};

		const interval = setInterval(draw, 60);
		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", setup);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-screen"
		/>
	);
};

export default MatrixRain;
