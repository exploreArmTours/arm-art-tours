'use client';
import SingleTour from '../../components/single-tour';
import React from 'react';
import { useParams } from 'next/navigation';

const SingleTourPage = () => {
  const params = useParams();
  const tourId = params?.id;
  return (
    <div>
      <SingleTour id={Number(tourId)} />
    </div>
  );
};

export default SingleTourPage;
