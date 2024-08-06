import { useQuery } from '@tanstack/react-query';
import {tagService} from '../services';
import {QUERY_TAG_KEY} from '../constants';
import {Models_GetTagsResult, Models_TagItem} from "../models";
import {AxiosError} from "axios";

export const useGetTagsQuery = (param?: Models_TagItem) => {
    return useQuery<
        Models_GetTagsResult,
        AxiosError,
        Models_GetTagsResult
    >([QUERY_TAG_KEY, param], () => {
        return tagService.getTags(param);
    }, {
        staleTime: 20000,
    })
}