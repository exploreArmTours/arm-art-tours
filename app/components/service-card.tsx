'use client';

import Image, { StaticImageData } from 'next/image';
import { Text, TextStyle } from '@/elements/typography/text';
import Button from '@/elements/button/button';
import Link from 'next/link';
import ExampleTour from '@/assets/images/exampletour.jpeg';

type ServiceCardProps = {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string | StaticImageData;
};

const ServiceCard = ({ title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div className='overflow-hidden rounded-xl border-primary-50 border-2 shadow-md bg-white flex flex-col'>
      <div className='relative h-48 w-full'>
        <Image
          src={imageUrl || ExampleTour}
          alt={title || ''}
          layout='fill'
          objectFit='cover'
          className='hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-4 flex flex-col gap-2 flex-grow'>
        <Text
          style={TextStyle.BodyLgSemiBold}
          className='text-primary-800'
          value={title}
        />
        <Text
          style={TextStyle.BodySmNormal}
          className='text-primary-600'
          value={description}
        />
        <div className='mt-auto pt-2'>
          <Link href={`/`}>
            <Button className='w-full bg-primary-500 hover:bg-primary-600 text-white'>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
