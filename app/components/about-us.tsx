'use client';
import Image from 'next/image';
import { Text, TextStyle } from '@/elements/typography/text';
import ExampleTourImage from '@/assets/images/exampletour.jpeg';

const AboutUs = () => {
  return (
    <section className='bg-white px-6 py-16 md:px-20 lg:px-36'>
      <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
        <div>
          <Image
            src={ExampleTourImage}
            alt='Map of Armenia'
            className='rounded-2xl shadow-lg'
            width={600}
            height={400}
            priority
          />
        </div>
        <div className='text-primary-800 flex flex-col gap-4'>
          <Text
            style={TextStyle.Header2}
            className='text-primary-500'
            value='About ArmArt Tours'
          />
          <Text
            style={TextStyle.BodyBaseNormal}
            value="At ArmArt Tours, we specialize in unforgettable journeys through Armenia — a land of ancient history, dramatic landscapes, and warm hospitality. Whether you're exploring centuries-old monasteries, tasting local wines in the Areni region, or gazing over Lake Sevan, we ensure every step is guided with care and cultural richness."
          />
          <Text
            style={TextStyle.BodyBaseNormal}
            value='We believe in personalized experiences and carefully design each tour to immerse you in the authentic spirit of Armenia — from remote mountain trails to vibrant Yerevan streets.'
          />
          <Text
            style={TextStyle.BodyBaseNormal}
            value='Join us, and discover Armenia not just as a destination, but as a heartfelt journey of tradition, taste, and timeless stories.'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
