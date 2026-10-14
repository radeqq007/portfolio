import { useEffect, useState } from "react";
import texture from "@/assets/texture.png";

const CHANGE_INTERVAL = 400;

const BackgroundTexture = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY(Math.random() * 100);
      setRotation(Math.random() * 40 - 20)
    }, CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 opacity-60 pointer-events-none"
      style={{
        backgroundImage: `url(${texture})`,
        rotate: `${rotation}deg`,
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: `center ${offsetY}%`,
      }}
    />
  );
};

export default BackgroundTexture;
