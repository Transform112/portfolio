import { useState } from 'react';
import { ContributionCard } from './ContributionCard';
import { ContributionModal } from './ContributionModal';
import { ModalWrapper } from './ModalWrapper';
import { contributionsData } from '../data/contributions';

export const Contributions = () => {
  const [selectedContribution, setSelectedContribution] = useState(null);

  return (
    <section id="contributions" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-900 mb-4">
            Open Source Contributions
          </h2>
          <p className="text-base sm:text-lg text-muted-600 max-w-2xl mx-auto">
            Building tools and libraries that help developers create better software. Here are
            some of my notable contributions to the open source community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributionsData.map((contribution, index) => (
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
              onClick={setSelectedContribution}
              index={index}
            />
          ))}
        </div>
      </div>

      <ModalWrapper
        isOpen={!!selectedContribution}
        onClose={() => setSelectedContribution(null)}
        title={selectedContribution?.title}
      >
        {selectedContribution && <ContributionModal contribution={selectedContribution} />}
      </ModalWrapper>
    </section>
  );
};
