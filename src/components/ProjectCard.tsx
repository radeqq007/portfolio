export interface ProjectBadge {
  text: string;
  href: string;
}

export interface ProjectCardProps {
  content: string;
  title: string;
  badges: ProjectBadge[];
  imgSrc: string;
}

const ProjectCard = ({ content, title, badges, imgSrc }: ProjectCardProps) => {
  return (
    <article data-project-card className="w-[min(85vw,44rem)] shrink-0">
      <img
        src={imgSrc}
        alt={`${title} preview`}
        draggable={false}
        className="aspect-[9/5] w-full select-none bg-blackish object-contain"
      />

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <h3 className="font-josefin text-6xl font-bold leading-none text-greenish">
          {title}
        </h3>

        {badges.map(({ text, href }) => (
          <a
            key={`${text}-${href}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-greenish px-3 py-1 font-krona text-xs uppercase tracking-wide text-blackish transition-colors hover:bg-white focus-visible:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenish"
          >
            {text}
          </a>
        ))}
      </div>

      <p className="mt-1 max-w-[34rem] font-krona text-md leading-relaxed text-white/90">
        {content}
      </p>
    </article>
  );
};

export default ProjectCard;
