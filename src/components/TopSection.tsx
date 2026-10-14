import About from "./About";
import VerticalName from "./VerticalName";
import ArrowDown from "@/assets/arrow-down.svg";

const TopSection = () => {
  return (
    <div className="flex md:flex-col justify-center h-screen" id="about">
      <VerticalName />
      <About />

      <div
        className="hidden md:flex absolute top-[90vh] md:gap-2 justify-center items-center"
      >
        <a href="#projects" className="peer font-krona bg-blackish text-white px-8 py-3 text-lg hover:bg-greenish hover:text-blackish outline-2 outline-transparent hover:outline-blackish transition-colors">
          SCROLL DOWN
        </a>

        <div className="relative h-12 w-12 overflow-hidden pointer-events-none peer-hover:[&>img:first-child]:translate-y-0 peer-hover:[&>img:last-child]:translate-y-7/6">
          <img
            src={ArrowDown}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out -translate-y-7/6"
          />

          <img
            src={ArrowDown}
            alt="Down Arrow"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out translate-y-0"
          />
        </div>
      </div>
    </div>
  )

}

export default TopSection;
