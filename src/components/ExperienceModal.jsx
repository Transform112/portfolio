import { MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceModal = ({ experience }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center text-3xl shadow-lg">
          {experience.logo}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-muted-900 mb-1">{experience.role}</h3>
          <p className="text-lg font-semibold text-muted-700 mb-2">{experience.company}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-600">
            <span className="font-medium">{experience.period}</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-muted-700">{experience.description}</p>

        <h4 className="text-lg font-semibold text-muted-900 mt-6 mb-3">Key Achievements</h4>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-700">
              <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-muted-900 mt-6 mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium bg-muted-100 text-muted-800 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
