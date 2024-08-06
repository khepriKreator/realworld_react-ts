import { useQuery } from '@tanstack/react-query';
import { articleService } from '../services';
import { QUERY_ARTICLES_KEY } from '../constants';



export const useGetArticleBySlugQuery = (slug: string | undefined) => {
    return useQuery([QUERY_ARTICLES_KEY, slug], () => {
        if (!slug) {
            return null;
        }
        return articleService.getArticleBySlug(slug);
    }, {
        staleTime: 20000,
        enabled: Boolean(slug),
    })
}