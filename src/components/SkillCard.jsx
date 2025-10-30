export const SkillCard = ({ skill }) => {
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center text-3xl">
          {skill.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-muted-900 mb-1">{skill.name}</h3>
          <p className="text-sm text-muted-600">{skill.experience}</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-700">Proficiency</span>
          <span className="text-sm font-bold text-accent-600">{skill.proficiency}%</span>
        </div>
        <div className="w-full h-2.5 bg-muted-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-muted-600 leading-relaxed">{skill.description}</p>
    </div>
  );
};
