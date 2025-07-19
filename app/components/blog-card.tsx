'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Text, TextStyle } from '@/elements/typography/text';
import Button from '@/elements/button/button';
import ExampleImage from '@/assets/images/exampletour.jpeg';
import { useTranslation } from 'react-i18next';

type BlogCardProps = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
};

const BlogCard = ({ slug, title, description, imageUrl }: BlogCardProps) => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col sm:flex-row bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      <div className='relative w-full sm:w-2/5 h-52 sm:h-auto min-h-[200px]'>
        <Image
          src={imageUrl || ExampleImage}
          alt={title}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between p-6 sm:w-3/5'>
        <div>
          <Text
            style={TextStyle.BodyLgSemiBold}
            value={title}
            className='text-primary-800 text-xl mb-2'
          />
          <Text
            style={TextStyle.BodySmNormal}
            value={
              description.length > 200
                ? description.slice(0, 200) + '...'
                : description
            }
            className='text-primary-600 mb-4 opacity-60 '
          />
        </div>
        <div>
          <Link href={`/our-blogs/${slug}`}>
            <Button className='text-primary-600 bg-white px-6 py-2 border-2 border-primary-500 hover:bg-primary-50 hover:border-primary-600 text-sm'>
              {t('button.readMore')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
