import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useLandingSlides = () => {
  const lang = i18n.language || 'en';

  return useQuery({
    queryKey: ['landingSlides', lang],
    queryFn: async () => {
      const res = await fetch(`/api/landing?lang=${lang}`);
      if (!res.ok) throw new Error('Failed to fetch landing slides');
      return res.json();
    },
  });
};
