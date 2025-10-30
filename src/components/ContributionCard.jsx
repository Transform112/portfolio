import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const ContributionCard = ({ contribution, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <button
        onClick={() => onClick(contribution)}
        className="w-full text-left bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-accent-200 transition-colors">
            {contribution.thumbnail}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-muted-900 group-hover:text-accent-600 transition-colors">
                {contribution.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-400 flex-shrink-0 group-hover:text-accent-600 transition-colors" />
            </div>
            <p className="text-sm text-muted-600 mb-3">{contribution.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {contribution.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-muted-100 text-muted-700 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-500 mt-3">{contribution.date}</p>
          </div>
        </div>
      </button>
    </motion.div>
  );
};
