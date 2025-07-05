'use client';
import { useState } from 'react';
import { Text, TextStyle } from '@/elements/typography/text';
import { mockBlogs } from '@/constants/data';
import BlogCard from './blog-card';
import Button from '@/elements/button/button';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

const BLOGS_PER_PAGE = 5;

const OurBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = mockBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const handleNextPage = () => {
    if (!isLastPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (!isFirstPage) setCurrentPage((prev) => prev - 1);
  };

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
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className='flex justify-center mt-12 gap-2 flex-wrap'>
          <Button
            onClick={handlePreviousPage}
            disabled={isFirstPage}
            className='w-40 flex items-center justify-center gap-2 text-primary-500 bg-white disabled:opacity-50'>
            <ArrowLeftIcon className='w-4 h-4' />
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-xl border-2 border-primary-500 text-center text-sm font-semibold ${
                currentPage === index + 1
                  ? 'bg-primary-500 text-white'
                  : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
              } transition-colors`}>
              {index + 1}
            </Button>
          ))}

          <Button
            onClick={handleNextPage}
            disabled={isLastPage}
            className='w-40 flex items-center justify-center gap-2 text-primary-500 bg-white disabled:opacity-50'>
            Next
            <ArrowRightIcon className='w-4 h-4' />
          </Button>
        </div>
      )}
    </div>
  );
};

export default OurBlogs;
