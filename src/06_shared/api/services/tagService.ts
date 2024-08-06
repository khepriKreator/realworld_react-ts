import {Models_TagItem, Models_GetTagsResult} from "../models";
import {apiClient} from "../apiClient.ts";


export const tagService = {
    getTags: async (tag?: Models_TagItem): Promise<Models_GetTagsResult> => {
            const result = await apiClient.get('tags', {
                params: {
                    tag,
                }
            })
            return result.data

    }
}