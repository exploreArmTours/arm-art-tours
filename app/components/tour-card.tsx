'use client';
import Image, { StaticImageData } from 'next/image';
import { Text, TextStyle } from '@/elements/typography/text';
import Button from '@/elements/button/button';
import Link from 'next/link';
import ExampleTour from '@/assets/images/exampletour.jpeg';

type TourCardProps = {
  id?: number;
  slug: string;
  title?: string;
  description?: string;
  imageUrl?: string | StaticImageData;
  time?: string;
  price?: string;
};

const TourCard = ({
  slug,
  title,
  description,
  imageUrl,
  time,
  price,
}: TourCardProps) => {
  return (
    <div className='h-[500px] overflow-hidden rounded-xl border-primary-50 border-2 shadow-md bg-white flex flex-col hover:scale-105 transition-transform duration-300 my-4 mx-2'>
      <div className='relative h-48 w-full'>
        <Image
          src={imageUrl || ExampleTour}
          alt={title || ''}
          layout='fill'
          objectFit='cover'
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
          className='text-primary-700'
          value={description}
        />
        <div className='bg-primary-50 p-4 flex flex-col gap-2 flex-grow rounded-xl'>
          <Text
            style={TextStyle.BodySmNormal}
            className='text-primary-600'
            value={`Duration:  ${time}`}
          />
          <Text
            style={TextStyle.BodySmNormal}
            className='text-primary-600'
            value={`Price:  from ${price}`}
          />
        </div>

        <div className='mt-auto pt-2 cursor-pointer'>
          <Link href={`/our-tours/${slug}`}>
            <Button className='w-full bg-primary-500 hover:bg-primary-600 text-white'>
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
