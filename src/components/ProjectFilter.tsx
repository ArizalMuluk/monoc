const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'NLP', value: 'Natural Language Processing' },
  { label: 'Computer Vision', value: 'Computer Vision' },
  { label: 'Predictive Modeling', value: 'Predictive Modeling' },
  { label: 'Image Classifier', value: 'Image Classifier' },
  { label: 'Other', value: 'Other' },
];

const ProjectFilter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (v: string) => void;
}) => (
  <div className="flex items-center justify-center mb-12">
    <div className="flex flex-wrap gap-2 border-b border-medium-gray w-full max-w-xl">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`relative px-3 py-2 text-xs md:text-sm uppercase tracking-wide transition-colors duration-200
            ${
              filter === f.value
                ? 'text-off-white font-bold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-off-white'
                : 'text-off-white/50 hover:text-off-white'
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  </div>
);

export default ProjectFilter;