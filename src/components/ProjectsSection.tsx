import ProjectsHeader from "./ProjectsHeader";
import ProjectsList from "./ProjectsList";

const ProjectsSection = () => {
  return (
    <div className="py-20" id="projects">
      <div data-pin-section className="relative w-full h-200 bg-blackish">
        <ProjectsHeader />
        <ProjectsList />
      </div>
    </div>
  );
};

export default ProjectsSection;
