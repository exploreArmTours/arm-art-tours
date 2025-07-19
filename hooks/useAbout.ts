import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useAbout = () => {
  const lang = i18n.language || 'en';
  return useQuery({
    queryKey: ['about', lang],
    queryFn: async () => {
      const res = await fetch(`/api/about?lang=${lang}`);
      if (!res.ok) throw new Error('Failed to fetch About Us content');
      return res.json();
    },
  });
};
