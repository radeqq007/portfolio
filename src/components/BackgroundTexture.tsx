import { useEffect, useState } from "react";
import texture from "@/assets/texture.png";

const CHANGE_INTERVAL = 400;

const BackgroundTexture = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetY(Math.random() * -100);
    }, CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      className="fixed -z-10 w-full opacity-50"
      src={texture}
      alt=""
      style={{
        transform: `translateY(${offsetY}%)`,
      }}
    />
  );
};

export default BackgroundTexture;
