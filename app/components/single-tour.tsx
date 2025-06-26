import React from 'react';
import { TourData } from '@/types/element-types/types';
import { Text, TextStyle } from '@/elements/typography/text';
import Image from 'next/image';
import Counter from './counter';

const SingleTour = ({ tourData }: { tourData: TourData }) => {
  const { title, description, imageUrl, time, price } = tourData;

  return (
    <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>
      <Text
        value={title}
        style={TextStyle.Header1}
        className='text-primary-800 text-4xl font-bold text-center mb-12'
      />

      <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
        <div className='w-full lg:w-1/2'>
          <Image
            src={imageUrl}
            alt={title}
            className='rounded-xl shadow-md w-full h-auto object-cover'
          />
        </div>

        <div className='w-full lg:w-1/2 flex flex-col'>
          <Text
            value={description}
            style={TextStyle.BodyLgNormal}
            className='text-primary-700 leading-relaxed text-justify mb-1'
          />
          <Text
            value={`Duration: ${time}`}
            style={TextStyle.BodySmSemibold}
            className='text-primary-600'
          />
          <Text
            value={`Price per person: ${price}`}
            style={TextStyle.BodySmSemibold}
            className='text-primary-600'
          />
          <Counter price={price} />
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
