import { useQuery } from '@tanstack/react-query';
import i18n from '../public/i18n';

export const useBlogDetail = ({ slug }: { slug: string }) => {
  const lang = i18n.language || 'en';
  return useQuery({
    queryKey: ['blog-details', lang, slug],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${slug}?lang=${lang}`);
      if (!response.ok) throw new Error('Failed to fetch blog details');
      return response.json;
    },
    enabled: !!slug,
  });
};
