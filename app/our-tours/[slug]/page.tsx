'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { mockTours } from '@/constants/data';
import { TourData } from '@/types/element-types/types';
import { Text, TextStyle } from '@/elements/typography/text';
import Image from 'next/image';
import Counter from '../../components/counter';
import { useTranslation } from 'react-i18next';
//import { useTourDetail } from '@/hooks/useTourDetails';

const TourDetailsPage = () => {
  const { slug } = useParams();
  const tourData = mockTours.find((tour) => tour.slug === slug);
  const { t } = useTranslation();

  const { title, description, imageUrl, time, price } = tourData as TourData;
  //const { data: tourData, isLoading, isError } = useTourDetail(slug as string);
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
    <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>
      <Text
        value={title}
        style={TextStyle.Header1}
        className='text-primary-800 text-4xl font-bold text-center mb-12'
      />

      <div className='flex flex-col lg:flex-row gap-10 justify-center'>
        <div className='w-full lg:w-1/2'>
          <Image
            src={imageUrl}
            alt={title}
            className='rounded-xl shadow-md w-full max-h-[500px] object-cover'
          />
          <div className='mt-4'>
            <Text
              value={`${t('tour.duration')}: ${time}`}
              style={TextStyle.BodySmSemibold}
              className='text-primary-600'
            />
            <Text
              value={`${t('tour.price')}: ${price}`}
              style={TextStyle.BodySmSemibold}
              className='text-primary-600'
            />
            <Counter price={price} />
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col'>
          <Text
            value={description}
            style={TextStyle.BodyLgNormal}
            className='text-primary-700 leading-relaxed text-justify mb-1'
          />
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;
