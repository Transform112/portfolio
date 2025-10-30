import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { skillsData } from '../data/skills';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skillsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, prefersReducedMotion]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
      return () => carousel.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels built over
            years of hands-on experience.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
          tabIndex={0}
          role="region"
          aria-label="Skills carousel"
        >
          <div className="overflow-hidden rounded-2xl">
            <div className="flex items-center justify-center min-h-[300px] py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 100 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center px-4"
                >
                  <SkillCard skill={skillsData[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-muted-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label="Previous skill"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-muted-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-muted-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label="Next skill"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-900" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {skillsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                  index === currentIndex
                    ? 'bg-accent-600 w-8'
                    : 'bg-muted-300 hover:bg-muted-400'
                }`}
                aria-label={`Go to skill ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
