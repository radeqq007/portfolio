type Project = {
  name: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    name: 'Sunbird',
    description:
      'Sunbird is a simple, interpreted, dynamically typed language.',
    stack: ['Go'],
  },
  {
    name: 'oBerry',
    description:
      'oBerry is a modern jQuery alternative designed to simplify the DOM manipulation and binding reactive data to HTML content.',
    stack: ['Typescript'],
  },
  {
    name: 'Github Stats',
    description:
      'Get your github stats: most used languages, followers, most starred repos etc.',
    stack: ['Vue.js', 'Tailwindcss', 'Chart.js'],
  },
];

const Work = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      {projects.map(project => (
        <div className="relative w-4/5 h-60 border-3 border-primary bg-bg overflow-hidden rounded-2xl">
          <div className="h-12 px-4 w-full bg-primary flex items-center">
            <h2 className="font-baloo font-bold text-bg text-3xl">
              {project.name}
            </h2>
          </div>
          <div className="font-lekton text-secondary px-4 py-3 text-xl flex flex-col justify-between">
            <p>{project.description}</p>
          </div>
          <span className="absolute bottom-2 left-2 font-baloo font-semibold text-lg">
            {project.stack.map(tool => (
              <span className="bg-primary text-bg px-8 rounded-full">
                {tool}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Work;
