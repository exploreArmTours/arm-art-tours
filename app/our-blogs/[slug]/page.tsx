'use client';
import { useParams } from 'next/navigation';
import { mockBlogs } from '@/constants/data';
import { Text, TextStyle } from '@/elements/typography/text';
import Image from 'next/image';
import { useBlogDetail } from '@/hooks/useBlogDetail';
import { useTranslation } from 'react-i18next';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = mockBlogs.find((b) => b.slug === slug);
  const { i18n } = useTranslation();

  // const { data: blog, isLoading, isError } = useBlogDetail(slug);

  if (!blog) {
    return (
      <Text
        value='Blog not found'
        style={TextStyle.BodySmSemibold}
        className='text-primary-500 uppercase tracking-wide text-center mt-20'
      />
    );
  }
  // if (isLoading) {
  //   return (
  //     <Text
  //       value='Loading...'
  //       style={TextStyle.BodySmSemibold}
  //       className='text-center mt-20 text-primary-500'
  //     />
  //   );
  // }

  // if (isError || !blog?.translations?.[blog.language]) {
  //   return (
  //     <Text
  //       value='Blog not found'
  //       style={TextStyle.BodySmSemibold}
  //       className='text-primary-500 uppercase tracking-wide text-center mt-20'
  //     />
  //   );
  // }

  return (
    <div className='px-6 py-16 md:px-24 lg:px-48 bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <Text
          value={blog.title}
          // value={blog.translations[i18n.language]?.title}
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
          // value={blog.translations[i18n.language]?.description}
          value={blog.description}
          style={TextStyle.BodyXlNormal}
          className='text-primary-700 text-justify indent-4'
        />
      </div>
    </div>
  );
}

// {
//   "id": 1,
//   "slug": "sevan-lake-sevanavank",
//   "imageUrl": "https://example.com/images/sevan.webp",
//   "translations": {
//     "en": {
//       "title": "Sevan Lake & Sevanavank",
//       "description": "Scenic lake surrounded by mountains and the historic Sevanavank Monastery on a peninsula."
//     },
//     "hy": {
//       "title": "Սևան լիճ և Սևանավանք",
//       "description": "Գեղատեսիլ լիճ՝ շրջապատված լեռներով և պատմական Սևանավանքով կղզում:"
//     },
//     "ru": {
//       "title": "Озеро Севан и Севанаванк",
//       "description": "Живописное озеро, окруженное горами, и исторический монастырь Севанаванк."
//     }
//   }
// }
