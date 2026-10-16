import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsList = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const scroller = scrollerRef.current;
        const track = trackRef.current;
        const trigger = scroller?.closest<HTMLElement>("[data-pin-section]");
        if (!trigger || !scroller || !track) return;

        document.fonts?.ready.then(() => ScrollTrigger.refresh());

        const getDistance = () => Math.max(0, track.scrollWidth - scroller.clientWidth);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger,
            pin: true,
            scrub: 1,
            start: () =>
              trigger.offsetHeight > window.innerHeight ? "top top" : "center center",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: scrollerRef }
  );

  return (
    <div
      ref={scrollerRef}
      className="ml-28 flex h-full items-center overflow-x-auto md:[scrollbar-width:none] md:ml-44 md:overflow-hidden md:[&::-webkit-scrollbar]:hidden"
    >
      <ul ref={trackRef} className="flex w-max shrink-0 gap-16 ml-10 pr-24 will-change-transform">
        {projects.map((project) => (
          <li key={project.title} className="shrink-0">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
