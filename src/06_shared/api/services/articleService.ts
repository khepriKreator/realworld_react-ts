import {apiClient} from '../apiClient'
import {Models_Article, Models_GetArticlesParams, Models_GetArticlesResult} from "../models";


export const articleService = {
    getArticles: async ({ author, tag, limit, offset, favorited }: Models_GetArticlesParams): Promise<Models_GetArticlesResult> => {
            const result = await apiClient.get('/articles',{
                params: {
                    author,
                    tag,
                    favorited,
                    limit: limit || 20,
                    offset: offset || 0
                }
            })
            return result.data;
    },
    getArticleBySlug: async (slug: string): Promise<Models_Article> => {
            const result = await apiClient.get(`/articles/${slug}`);
            return result.data;
    },
}








