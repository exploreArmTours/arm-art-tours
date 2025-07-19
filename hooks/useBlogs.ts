import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useBlogs = (page: number, limit = 5) => {
  const lang = i18n.language || 'en';
  return useQuery({
    queryKey: ['blogs', lang, page],
    queryFn: async () => {
      const response = await fetch(
        `/api/blogs?lang=${lang}&page=${page}&limit=${limit}`,
      );
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return response.json();
    },
  });
};
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
