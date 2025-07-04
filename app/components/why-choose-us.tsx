'use client';

import { MapPin, Headset, ShieldCheck, Timer } from 'lucide-react';
import { Text, TextStyle } from '@/elements/typography/text';

const features = [
  {
    name: 'Destinations',
    description: 'Explore top locations in Armenia, hand-picked just for you.',
    icon: MapPin,
  },
  {
    name: '24/7 Support',
    description: 'Our travel experts are here to help you anytime, anywhere.',
    icon: Headset,
  },
  {
    name: 'Trusted & Secure',
    description:
      'Book with confidence thanks to verified reviews and secure checkout.',
    icon: ShieldCheck,
  },
  {
    name: 'Fast Booking',
    description:
      'Quick and seamless booking process to get you on your way faster.',
    icon: Timer,
  },
];

const WhyChooseUs = () => {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <Text
            style={TextStyle.BodySmSemibold}
            value='Why Choose Us'
            className='text-primary-500 uppercase tracking-wide mb-4'
          />
          <Text
            style={TextStyle.Header1} //Header1 @ chi @ndunum
            value='Make every journey unforgettable'
            className='mt-2 text-primary-700 text-4xl font-bold' //Header1 @ chi @ndunum
          />
          <Text
            style={TextStyle.BodyLgNormal}
            value='We make travel planning effortless, enjoyable, and tailored to your needs.'
            className='mt-4 text-primary-600'
          />
        </div>

        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='group bg-gray-50 p-6 rounded-lg transition hover:shadow-xl hover:bg-white'>
              <div className='flex gap-2 items-center'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-900 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110'>
                  <feature.icon className='h-6 w-6' aria-hidden='true' />
                </div>
                <Text
                  style={TextStyle.BodyMdBold}
                  value={feature.name}
                  className='text-primary-500'
                />
              </div>

              <Text
                style={TextStyle.BodySmNormal}
                value={feature.description}
                className='mt-2 text-primary-600'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
