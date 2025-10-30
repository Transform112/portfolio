import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const Timeline = ({ data }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600" />

      <div className="space-y-8 md:space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={item.year}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={
              isVisible && !prefersReducedMotion
                ? { opacity: 1, x: 0 }
                : isVisible
                ? { opacity: 1 }
                : {}
            }
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-12 md:pl-16"
          >
            <div className="absolute left-0 w-8 md:w-12 h-8 md:h-12 bg-accent-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-bold">
                {item.year.toString().slice(2)}
              </span>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-lg md:text-xl font-bold text-accent-600">
                  {item.year}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-muted-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
