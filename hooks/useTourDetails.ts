import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useTourDetail = (slug: string) => {
  const lang = i18n.language || 'en';

  return useQuery({
    queryKey: ['tourDetail', lang, slug],
    queryFn: async () => {
      const res = await fetch(`/api/tours/${slug}?lang=${lang}`);
      if (!res.ok) throw new Error('Failed to fetch tour detail');
      return res.json();
    },
    enabled: !!slug,
  });
};
