'use client';
import { useState } from 'react';
import { Text, TextStyle } from '@/elements/typography/text';
import TourCard from '../components/tour-card';
import { mockTours } from '@/constants/data';
import Button from '@/elements/button/button';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';
//import useTours from '@/hooks/useTours';

const TOURS_PER_PAGE = 6;

const OurTours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n, t } = useTranslation();
  // const {
  //   data,
  //   isLoading,
  //   isError,
  // } = useTours(currentPage, TOURS_PER_PAGE);

  // const currentTours = data?.tours ?? [];
  //const totalPages = data?.totalPages ?? 1;
  //const translation = data.translations[i18n.language] || data.translations.en;
  const totalPages = Math.ceil(mockTours.length / TOURS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE;
  const currentTours = mockTours.slice(startIndex, startIndex + TOURS_PER_PAGE);

  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  const handleNextPage = () => {
    if (!isLastPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (!isFirstPage) setCurrentPage((prev) => prev - 1);
  };
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error:{currentTours.message}</div>;

  return (
    <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>
      <div className='text-center mb-12'>
        <Text
          style={TextStyle.BodySmSemibold}
          value='Discover All Tours'
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value='Choose Your Armenian Adventure'
          className='mt-2 text-4xl font-bold text-primary-700'
        />
        {/* <Text
          style={TextStyle.BodySmSemibold}
          value={translation.title}
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1}
          value={translation.subTitle}
          className='mt-2 text-4xl font-bold text-primary-700'
        /> */}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentTours.map((tour) => (
          <TourCard key={tour.id} {...tour} />

          // <TourCard
          //   key={tour.id}
          //   slug={tour.slug}
          //   title={tour.translations[i18n.language]?.title ?? ''}
          //   description={tour.translations[i18n.language]?.description ?? ''}
          //   imageUrl={tour.imageUrl}
          //   time={tour.translations[i18n.language]?.time ?? ''}
          //   price={tour.price}
          // />
        ))}
      </div>
      <div className='flex justify-center mt-12 gap-2'>
        <Button
          disabled={isFirstPage}
          onClick={handlePreviousPage}
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
    </div>
  );
};

export default OurTours;
// 'use client';

// import { useState } from 'react';
// import { Text, TextStyle } from '@/elements/typography/text';
// import TourCard from '../components/tour-card';
// import Button from '@/elements/button/button';
// import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
// import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
// import { useTranslation } from 'react-i18next';
// import { useTours } from '@/hooks/useTours';

// const TOURS_PER_PAGE = 6;

// const OurTours = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { i18n, t } = useTranslation();

//   const { data, isLoading, isError } = useTours(currentPage, TOURS_PER_PAGE);

//   if (isLoading) return <div>Loading...</div>;
//   if (isError || !data?.translations) return <div>Error loading tours</div>;

//   const tours = data.tours;
//   const totalPages = data.totalPages;
//   const translation = data.translations[i18n.language] || data.translations.en;

//   const isLastPage = currentPage === totalPages;
//   const isFirstPage = currentPage === 1;

//   const handleNextPage = () => {
//     if (!isLastPage) setCurrentPage((prev) => prev + 1);
//   };

//   const handlePreviousPage = () => {
//     if (!isFirstPage) setCurrentPage((prev) => prev - 1);
//   };

//   return (
//     <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>
//       <div className='text-center mb-12'>
//         <Text
//           style={TextStyle.BodySmSemibold}
//           value={translation.title}
//           className='text-primary-500 uppercase tracking-wide'
//         />
//         <Text
//           style={TextStyle.Header1}
//           value={translation.subTitle}
//           className='mt-2 text-4xl font-bold text-primary-700'
//         />
//       </div>

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
//         {tours.map((tour) => (
//           <TourCard
//             key={tour.id}
//             slug={tour.slug}
//             imageUrl={tour.imageUrl}
//             title={tour.translations[i18n.language]?.title}
//             description={tour.translations[i18n.language]?.description}
//             time={tour.translations[i18n.language]?.time}
//             price={tour.price}
//           />
//         ))}
//       </div>

//       <div className='flex justify-center mt-12 gap-2'>
//         <Button
//           disabled={isFirstPage}
//           onClick={handlePreviousPage}
//           className='w-40 flex items-center justify-center gap-2 text-primary-500 bg-white disabled:opacity-50'>
//           <ArrowLeftIcon className='w-4 h-4' />
//           {t('button.previous')}
//         </Button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <Button
//             key={index + 1}
//             onClick={() => setCurrentPage(index + 1)}
//             className={`w-10 h-10 rounded-xl border-2 border-primary-500 text-center text-sm font-semibold ${
//               currentPage === index + 1
//                 ? 'bg-primary-500 text-white'
//                 : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
//             } transition-colors`}>
//             {index + 1}
//           </Button>
//         ))}

//         <Button
//           onClick={handleNextPage}
//           disabled={isLastPage}
//           className='w-40 flex items-center justify-center gap-2 text-primary-500 bg-white disabled:opacity-50'>
//           {t('button.next')}
//           <ArrowRightIcon className='w-4 h-4' />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OurTours;

// {
//   "tours": [ /* tour items here */ ],
//   "currentPage": 1,
//   "totalPages": 2,
//   "toursPerPage": 6,
//   "totalTours": 12,
//   "translations": {
//     "en": {
//       "title": "Discover All Tours",
//       "subTitle": "Choose Your Armenian Adventure"
//     },
//     "hy": {
//       "title": "Բացահայտեք բոլոր տուրերը",
//       "subTitle": "Ընտրեք ձեր արկածը Հայաստանում"
//     },
//     "ru": {
//       "title": "Откройте все туры",
//       "subTitle": "Выберите свое армянское приключение"
//     }
//   }
// }
