'use client';
import Image from 'next/image';
import SuggestedServices from './suggested-services';
import LandingImage1 from '@/assets/images/amberd.jpeg';
import LandingImage2 from '@/assets/images/TatevMonastery.jpg';
import { Text, TextStyle } from '@/elements/typography/text';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SuggestedTours from './suggested-tours';
import WhyChooseUs from './why-choose-us';

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mockData = [
    { id: 1, text: 'Explore Our Suggested Tours', image: LandingImage1 },
    { id: 2, text: 'Enjoy Armenian Culture with Us', image: LandingImage2 },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockData.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, mockData.length]);

  return (
    <div className='min-h-screen relative '>
      <div className='relative h-[70vh] w-full overflow-hidden'>
        {mockData.map((elem, index) => {
          return (
            <div
              key={elem.id}
              className={twMerge(
                'absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ',
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0',
              )}>
              <Image
                src={elem.image}
                alt='Landing Image'
                fill
                className='object-cover'
              />
              <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/20'>
                <Text
                  style={TextStyle.Header1}
                  className='text-center mb-40 text-4xl font-bold text-primary-50 uppercase' //Header1 @ chi @ndunum
                  value={elem.text}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='relative -mt-[230px] z-10 px-6 md:px-24 lg:px-48'>
        <SuggestedServices />
      </div>
      <div className='mt-24'>
        <SuggestedTours />
      </div>
      <div className='my-16'>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default LandingPage;
