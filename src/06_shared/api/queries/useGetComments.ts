import { useQuery } from '@tanstack/react-query';
import {commentService} from '../services';
import {QUERY_COMMENTS_KEY} from '../constants';

export const useGetCommentsQuery = (slug: string | undefined) => {
    return useQuery([QUERY_COMMENTS_KEY, slug], () => {
        if (!slug) {
            return null;
        }
        return commentService.getComments(slug);
    }, {
        staleTime: 20000,
        enabled: Boolean(slug),
    })
}