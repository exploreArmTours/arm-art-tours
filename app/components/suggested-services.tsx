import React from 'react';
import ServiceCard from './service-card';
import ExampleTour from '@/assets/images/exampletour.jpeg';

const mockTours = [
  {
    id: 1,
    title: 'Transfer',
    description:
      'Reliable airport and city transfers with comfortable vehicles and local drivers.',
    imageUrl: ExampleTour,
  },
  {
    id: 2,
    title: 'Group Tours',
    description:
      'Join small group adventures to Armenia’s top landmarks with expert guides.',
    imageUrl: ExampleTour,
  },
  {
    id: 3,
    title: 'Private Tours',
    description:
      'Enjoy fully customized tours designed around your schedule and interests.',
    imageUrl: ExampleTour,
  },
];

const SuggestedServices = () => {
  return (
    <>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mockTours.map((tour) => {
            return (
              <ServiceCard
                key={tour.id}
                title={tour.title}
                description={tour.description}
                imageUrl={tour.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SuggestedServices;
