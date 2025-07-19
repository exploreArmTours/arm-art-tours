'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Text, TextStyle } from '@/elements/typography/text';
import TourCard from './tour-card';
import { mockTours } from '@/constants/data';

const SuggestedTours = () => {
  return (
    <section className='bg-white'>
      <div className='mb-10 text-center flex flex-col items-cener gap-2'>
        <Text
          style={TextStyle.BodySmSemibold}
          value='Recommended Tours'
          className='text-primary-500 uppercase tracking-wide'
        />
        <Text
          style={TextStyle.Header1} //Header1 @ chi @ndunum
          value='Our Top Picks for You'
          className='mt-2 text-primary-700 text-4xl font-bold' //Header1 @ chi @ndunum
        />
      </div>
      <div className='max-w-7xl mx-auto'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}>
          {mockTours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <TourCard {...tour} />
              {/* <TourCard
  slug={tour.slug}
  imageUrl={tour.imageUrl}
  title={tour.translations[i18n.language]?.title}
  description={tour.translations[i18n.language]?.description}
  time={tour.translations[i18n.language]?.time}
  price={tour.price}
/> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuggestedTours;

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Text, TextStyle } from '@/elements/typography/text';
// import TourCard from './tour-card';
// import { useSuggestedTours } from '@/hooks/useSuggestedTours';
// import { useTranslation } from 'react-i18next';

// const SuggestedTours = () => {
//   const { i18n } = useTranslation();
//   const lang = i18n.language || 'en';

//   const { data, isLoading, isError } = useSuggestedTours();

//   if (isLoading) return <div>Loading...</div>;
//   if (isError || !data) return <div>Error loading suggested tours.</div>;

//   const sectionTitle = data.title?.[lang] ?? 'Recommended Tours';
//   const sectionSubtitle = data.subtitle?.[lang] ?? 'Our Top Picks for You';

//   return (
//     <section className='bg-white'>
//       <div className='mb-10 text-center flex flex-col items-center gap-2'>
//         <Text
//           style={TextStyle.BodySmSemibold}
//           value={sectionTitle}
//           className='text-primary-500 uppercase tracking-wide'
//         />
//         <Text
//           style={TextStyle.Header1}
//           value={sectionSubtitle}
//           className='mt-2 text-primary-700 text-4xl font-bold'
//         />
//       </div>
//       <div className='max-w-7xl mx-auto'>
//         <Swiper
//           modules={[Navigation, Pagination, A11y]}
//           spaceBetween={20}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {data.tours.map((tour) => (
//             <SwiperSlide key={tour.id}>
//               <TourCard
//                 slug={tour.slug}
//                 imageUrl={tour.imageUrl}
//                 title={tour.translations?.[lang]?.title}
//                 description={tour.translations?.[lang]?.description}
//                 time={tour.translations?.[lang]?.time}
//                 price={tour.price}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SuggestedTours;
