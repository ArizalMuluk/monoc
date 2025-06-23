import type { Project } from '../App';

const ProjectGrid = ({
  projects,
  onProjectClick
}: {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <div 
        key={project.id}
        className="group cursor-pointer animate-slide-up"
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => onProjectClick(project)}
      >
        <div className="bg-dark-gray overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-wide text-off-white/60">{project.categories.join(' / ')}</span>
              <span className="text-sm text-off-white/60">{project.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-off-white mb-3 group-hover:text-off-white/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-off-white/70 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-wide text-off-white/50 bg-off-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectGrid;