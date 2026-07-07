import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/constants/projects"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      const paddingOffset = 100;

      const getScrollAmount = () => {
        return -(scrollContainer.scrollWidth - window.innerWidth + paddingOffset);
      }

      gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollContainer.scrollWidth - window.innerWidth + paddingOffset}`,
          invalidateOnRefresh: true,
        }
      })
    })
  }, { scope: containerRef })

  return (
    <main ref={containerRef}>
      <Link to="/" data-cursor="shrink" className="group text-text px-20 py-5 flex gap-4 items-center">
        <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-highlight transition-all" />
        <h1 className="text-3xl font-bold">Projects</h1>
      </Link>

      <div
        ref={scrollRef}
        className="flex flex-nowrap justify-start gap-20 p-20 w-max"
      >
        {
          projects.map(project => <ProjectCard title={project.title} description={project.description} imgSrc={project.imgSrc} links={project.links} badges={project.badges} />)
        }
      </div>
    </main>
  )
}

export default Projects
