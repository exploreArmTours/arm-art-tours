'use client';
import { useState } from 'react';
import { Text, TextStyle } from '@/elements/typography/text';
import TourCard from '../components/tour-card';
import { mockTours } from '@/constants/data';

const TOURS_PER_PAGE = 6;

const OurTours = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockTours.length / TOURS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE;
  const currentTours = mockTours.slice(startIndex, startIndex + TOURS_PER_PAGE);

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
        {currentTours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
      <div className='flex justify-center mt-12 gap-2'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-xl border-2 border-primary-500 text-center text-sm font-semibold ${
              currentPage === index + 1
                ? 'bg-primary-500 text-white'
                : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
            } transition-colors`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OurTours;
