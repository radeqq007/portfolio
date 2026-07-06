import { ArrowRight } from "lucide-react"
import Section from "@/components/Section"
import MatrixRain from "@/components/Matrix"
import { Link } from "react-router"

const ProjectsSection = () => {
  return (
    <Section className="col-start-2 row-start-3 relative" title="Projects">
      <Link to="/projects" className="text-text flex gap-1 items-center group/hyperlink *:transition-all absolute bottom-4 right-4" data-cursor="shrink">
        <ArrowRight strokeWidth={1} size={22} className="-translate-x-2 opacity-0 group-hover/hyperlink:opacity-100 group-hover/hyperlink:translate-x-2" />
        <span className="group-hover/hyperlink:translate-x-2">
          Explore All
        </span>
        <ArrowRight strokeWidth={1} size={22} className="group-hover/hyperlink:translate-x-4 group-hover/hyperlink:opacity-0" />
      </Link>

      <div className="group-hover:opacity-100 opacity-0 transition-all h-full w-full duration-400">
        <MatrixRain />
      </div>
    </Section>
  )
}

export default ProjectsSection
