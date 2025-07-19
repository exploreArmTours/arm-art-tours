'use client';
import { useState } from 'react';
import { Text, TextStyle } from '@/elements/typography/text';
import { mockBlogs } from '@/constants/data';
import BlogCard from './blog-card';
import Button from '@/elements/button/button';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';
//import useBlogs from '@/hooks/useBlogs';

const BLOGS_PER_PAGE = 5;

const OurBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n, t } = useTranslation();
  //const { data, isLoading, isError } = useBlogs(currentPage, BLOGS_PER_PAGE);
  // const currentBlogs = data?.blogs ?? [];//miangamic kga 5 hat blog backic
  //const totalPages = data?.totalPages ?? 1;
  //const translation = data.translations[i18n.language] || data.translations['en'];
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
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {currentBlogs?.message}</div>;

  return (
    <div className='bg-gradient-to-b from-primary-50 via-white to-white min-h-screen px-4 py-8 sm:px-6 sm:py-20 md:px-20 lg:px-36'>
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <Text
          style={TextStyle.BodySmSemibold}
          value='Our Blog'
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value='Explore the Heart of Armenia'
          className='mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700'
        />
        <Text
          style={TextStyle.BodyMdNormal}
          value='Dive into our latest travel stories, cultural insights, and tips for exploring Armenia’s breathtaking landscapes and historical sites.'
          className='mt-4 text-primary-600'
        />
        {/* <Text
          style={TextStyle.BodySmSemibold}
          value={translation.title}
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value={translation.subTitle}
          className='mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700'
        />
        <Text
          style={TextStyle.BodyMdNormal}
          value={translation.subTitleDescription}
          className='mt-4 text-primary-600'
        /> */}
      </div>
      <div className='flex flex-col gap-10'>
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
          // <BlogCard
          //   key={blog.id}
          //   slug={blog.slug}
          //   title={blog.translations[i18n.language]?.title ?? ''}
          //   description={blog.translations[i18n.language]?.description ?? ''}
          //   imageUrl={blog.imageUrl}
          //   id={blog.id}
          // />
        ))}
      </div>
      {totalPages > 1 && (
        <div className='flex justify-center mt-12 gap-2 flex-wrap px-2'>
          <Button
            onClick={handlePreviousPage}
            disabled={isFirstPage}
            className='w-40 flex items-center justify-center gap-2 text-primary-500 bg-white disabled:opacity-50'>
            <ArrowLeftIcon className='w-4 h-4' />
            {t('button.previous')}
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
            {t('button.next')}
            <ArrowRightIcon className='w-4 h-4' />
          </Button>
        </div>
      )}
    </div>
  );
};

export default OurBlogs;
// {
//   "blogs": [
//     {
//       "id": 1,
//       "slug": "sevan-lake-sevanavank",
//       "imageUrl": "https://example.com/images/sevan.webp",
//       "translations": {
//         "en": {
//           "title": "Sevan Lake & Sevanavank",
//           "description": "Scenic lake surrounded by mountains and the historic Sevanavank Monastery on a peninsula."
//         },
//         "hy": {
//           "title": "Սևան լիճ և Սևանավանք",
//           "description": "Գեղատեսիլ լիճ՝ շրջապատված լեռներով և պատմական Սևանավանքով կղզում:"
//         },
//         "ru": {
//           "title": "Озеро Севан и Севанаванк",
//           "description": "Живописное озеро, окруженное горами, и исторический монастырь Севанаванк."
//         }
//       }
//     }
//     // ...more blogs
//   ],
//   "currentPage": 1,
//   "totalPages": 3,
//   "blogsPerPage": 5,
//   "totalBlogs": 15,
//   "translations": {
//     "en": {
//       "title": "Our Blog",
//       "subTitle": "Explore the Heart of Armenia",
//       "subTitleDescription": "Dive into our latest travel stories, cultural insights, and tips for exploring Armenia’s breathtaking landscapes and historical sites."
//     },
//     "hy": {
//       "title": "Մեր Բլոգը",
//       "subTitle": "Բացահայտեք Հայաստանի սիրտը",
//       "subTitleDescription": "Ճամփորդական պատմություններ, մշակութային հետաքրքրություններ և խորհուրդներ՝ Հայաստանի գեղեցիկ տեսարժան վայրերը ուսումնասիրելու համար։"
//     },
//     "ru": {
//       "title": "Наш блог",
//       "subTitle": "Откройте сердце Армении",
//       "subTitleDescription": "Погрузитесь в наши последние истории, культурные особенности и советы по исследованию захватывающих мест Армении."
//     }
//   }
// }
