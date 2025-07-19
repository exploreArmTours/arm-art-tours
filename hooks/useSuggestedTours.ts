import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useSuggestedTours = () => {
  const lang = i18n.language || 'en';

  return useQuery({
    queryKey: ['suggestedTours', lang],
    queryFn: async () => {
      const res = await fetch(`/api/tours/suggested?lang=${lang}`);
      if (!res.ok) throw new Error('Failed to fetch suggested tours');
      return res.json();
    },
  });
};
