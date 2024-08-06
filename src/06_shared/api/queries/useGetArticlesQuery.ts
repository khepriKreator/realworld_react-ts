import { useQuery } from '@tanstack/react-query';
import { articleService } from '../services';
import { QUERY_ARTICLES_KEY } from '../constants';
import {Models_GetArticlesParams, Models_GetArticlesResult} from "../models";
import {AxiosError} from "axios";

export const useGetArticlesQuery = (params: Models_GetArticlesParams) => {
    return useQuery<
        Models_GetArticlesResult,
        AxiosError,
        Models_GetArticlesResult
    >([QUERY_ARTICLES_KEY, params], () => {
        return articleService.getArticles(params);
    }, {
        staleTime: 20000,
    })
}