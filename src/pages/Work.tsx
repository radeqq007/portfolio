import sunbird from '../assets/imgs/sunbird.png';

type Project = {
  name: string;
  description: string;
  img: string;
  stack: string[];
};

const projects: Project[] = [
  {
    name: 'Sunbird',
    description: 'Sunbird is a simple, interpreted language.',
    img: sunbird,
    stack: ['Go'],
  },
];

const Work = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      {projects.map(project => (
        <div className="relative w-6/7 h-60 border-3 border-primary rounded-2xl flex items-end">
          <div className="z-10 px-4 py-2 font-lekton flex flex-col gap-3">
            <span>
              <h1 className="text-primary text-4xl font-bold">
                {project.name}
              </h1>
              <p className="text-secondary text-xl">{project.description}</p>
            </span>
            <div className="flex gap-1">
              {project.stack.map(tool => (
                <span className="bg-primary rounded-full px-3 font-baloo">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 z-1 rounded-xl bg-gradient-to-t from-black to-black/0"></div>
          <img
            src={project.img}
            alt={project.name}
            className="absolute w-full h-full top-0 rounded-xl -z-10"
          />
        </div>
      ))}
    </div>
  );
};

export default Work;
