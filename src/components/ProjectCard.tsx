import type { Project } from "@/types"
import Badge from "@/components/Badge"

const ProjectCard = ({ title, imgSrc, description, links, badges }: Project) => {
  return (
    <div className="border-1 border-accent w-[55vw] min-h-160 py-20 px-8 rounded-xl flex flex-col items-center gap-18 relative" data-cursor="expand">
      <img src={imgSrc} alt={title} className="text-text-secondary w-full h-50 object-contain" />

      <div className="h-full">
        <h2 className="text-text text-4xl font-bold w-full">{title}</h2>
        <span className="flex flex-wrap gap-1 mb-2">
          {
            badges?.map(badge => <img src={badge} alt={`${title} badge`}/>)
          }
        </span>
        <p className="text-text-secondary text-xl">{description}</p>

        <span className="absolute bottom-4 right-6 flex gap-2">
          {
            Object.entries(links ?? {}).map(([text, href]) =>
              <a href={href} target="_blank" data-cursor="shrink"><Badge text={text} className="py-1 px-6 hover:bg-highlight hover:text-text" /></a>
            )
          }
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
