'use client';
import SingleTour from '../../components/single-tour';
import React from 'react';
import { useParams } from 'next/navigation';
import { mockTours } from '@/constants/data';
import { TourData } from '@/types/element-types/types';
import { Text, TextStyle } from '@/elements/typography/text';

const SingleTourPage = () => {
  const params = useParams();
  const tourName = params?.slug;
  const tourData = mockTours.find((tour) => tour.slug === tourName);
  if (!tourData) {
    return (
      <Text
        value='Tour not found'
        style={TextStyle.BodySmSemibold}
        className='text-primary-500 uppercase tracking-wide text-center'
      />
    );
  }
  return (
    <div>
      <SingleTour tourData={tourData as TourData} />
    </div>
  );
};

export default SingleTourPage;
