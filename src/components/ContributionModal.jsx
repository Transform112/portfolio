import { ExternalLink } from 'lucide-react';

export const ContributionModal = ({ contribution }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center text-3xl">
          {contribution.thumbnail}
        </div>
        <div className="flex-1">
          <p className="text-lg text-muted-600 mb-2">{contribution.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {contribution.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-accent-100 text-accent-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <h3 className="text-lg font-semibold text-muted-900">Overview</h3>
        <p className="text-muted-700">{contribution.description}</p>

        <h3 className="text-lg font-semibold text-muted-900 mt-6">Details</h3>
        <p className="text-muted-700">{contribution.details}</p>

        <h3 className="text-lg font-semibold text-muted-900 mt-6">Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {contribution.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium bg-muted-100 text-muted-800 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {contribution.link && (
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};
