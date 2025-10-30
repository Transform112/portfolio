import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';

export const ExperienceCard = ({ experience, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <button
        onClick={() => onClick(experience)}
        className="w-full text-left bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center text-3xl shadow-md">
            {experience.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-muted-900 group-hover:text-accent-600 transition-colors">
                {experience.role}
              </h3>
              <ChevronRight className="w-5 h-5 text-muted-400 flex-shrink-0 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-base font-semibold text-muted-700 mb-2">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-600 mb-3">
              <span className="font-medium">{experience.period}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {experience.location}
              </span>
            </div>
            <p className="text-sm text-muted-600 line-clamp-2">{experience.description}</p>
          </div>
        </div>
      </button>
    </motion.div>
  );
};
