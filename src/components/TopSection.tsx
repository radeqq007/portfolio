import About from "./About";
import VerticalName from "./VerticalName";
import ArrowDown from "@/assets/arrow-down.svg";

const TopSection = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <VerticalName />
      <About />

      <div className="absolute top-[90vh] flex gap-2 justify-center items-center">
        <span className="font-krona bg-blackish text-white px-8 py-3 text-lg">
          SCROLL DOWN
        </span>
        <img src={ArrowDown} alt="Down Arrow" className="h-12" />
      </div>
    </div>
  )

}

export default TopSection;
