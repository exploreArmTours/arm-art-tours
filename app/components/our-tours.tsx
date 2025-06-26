'use client';
import { Text, TextStyle } from '@/elements/typography/text';
import TourCard from '../components/tour-card';
import { mockTours } from '@/constants/data';

const OurTours = () => {
  return (
    <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>
      <div className='text-center mb-12'>
        <Text
          style={TextStyle.BodySmSemibold}
          value='Discover All Tours'
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value='Choose Your Armenian Adventure'
          className='mt-2 text-4xl font-bold text-primary-700'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {mockTours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default OurTours;
