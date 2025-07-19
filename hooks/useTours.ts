// import { useQuery } from '@tanstack/react-query';
// import i18n from '../public/i18n';

// export const useTours = (page: number, limit = 6) => {
//   const lang = i18n.language || 'en';
//   return useQuery({
//     queryKey: ['tours', page, lang],
//     queryFn: async () => {
//       const response = await fetch(
//         `/api/tours?lang=${lang}&page=${page}&limit=${limit}`,
//       );
//       if (!response.ok) throw new Error('Failed to fetch tours');
//       return response.json();
//     },
//   });
// };

import { useQuery } from '@tanstack/react-query';

import i18n from '../public/i18n';

export const useTours = (page: number, limit: number) => {
  const lang = i18n.language || 'en';

  return useQuery({
    queryKey: ['tours', lang, page, limit],
    queryFn: async () => {
      const res = await fetch(
        `/api/tours?lang=${lang}&page=${page}&limit=${limit}`,
      );
      if (!res.ok) throw new Error('Failed to fetch tours');
      return res.json();
    },
  });
};
