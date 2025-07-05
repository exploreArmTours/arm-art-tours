'use client';
import { Text, TextStyle } from '@/elements/typography/text';
import { mockBlogs } from '@/constants/data';
import BlogCard from './blog-card';

const OurBlogs = () => {
  return (
    <div className='bg-gradient-to-b from-primary-50 via-white to-white min-h-screen px-6 py-16 md:px-20 lg:px-36'>
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <Text
          style={TextStyle.BodySmSemibold}
          value='Our Blog'
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value='Explore the Heart of Armenia'
          className='mt-2 text-4xl sm:text-5xl font-bold text-primary-700'
        />
        <Text
          style={TextStyle.BodyMdNormal}
          value='Dive into our latest travel stories, cultural insights, and tips for exploring Armenia’s breathtaking landscapes and historical sites.'
          className='mt-4 text-primary-600'
        />
      </div>

      <div className='flex flex-col gap-10'>
        {mockBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default OurBlogs;
