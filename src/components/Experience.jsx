import { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceModal } from './ExperienceModal';
import { ModalWrapper } from './ModalWrapper';
import { experiencesData } from '../data/experiences';

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-muted-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-900 mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-600 max-w-2xl mx-auto">
            Over 15 years of professional experience building web applications, leading teams,
            and delivering impactful solutions for companies of all sizes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiencesData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onClick={setSelectedExperience}
              index={index}
            />
          ))}
        </div>
      </div>

      <ModalWrapper
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.role}
      >
        {selectedExperience && <ExperienceModal experience={selectedExperience} />}
      </ModalWrapper>
    </section>
  );
};
