import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useFAQ = () => {
  const lang = i18n.language || 'en';
  return useQuery({
    queryKey: ['faq', lang],
    queryFn: async () => {
      const response = await fetch(`/api/faq?lang=${lang}`);
      if (!response.ok) throw new Error('Failed to fetch faq');
      return response.json();
    },
  });
};
