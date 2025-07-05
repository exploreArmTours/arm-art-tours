'use client';
import { useParams } from 'next/navigation';
import { mockBlogs } from '@/constants/data';
import { Text, TextStyle } from '@/elements/typography/text';
import Image from 'next/image';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = mockBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <Text
        value='Blog not found'
        style={TextStyle.BodySmSemibold}
        className='text-primary-500 uppercase tracking-wide text-center mt-20'
      />
    );
  }

  return (
    <div className='px-6 py-16 md:px-24 lg:px-48 bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <Text
          value={blog.title}
          style={TextStyle.Header1}
          className='text-4xl font-bold text-primary-800 mb-4'
        />
        <div className='relative w-full h-96 mb-8 rounded-lg overflow-hidden'>
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className='object-cover'
          />
        </div>
        <Text
          value={blog.description}
          style={TextStyle.BodyLgNormal}
          className='text-primary-700 leading-relaxed'
        />
      </div>
    </div>
  );
}
