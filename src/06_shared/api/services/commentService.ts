import {apiClient} from "../apiClient.ts";
import {AxiosError} from "axios";
import {Models_Comment} from "../models";


export const commentService = {
    getComments: async (slug: string): Promise<Models_Comment[] | AxiosError> => {
        try {
            const result = await apiClient.get(`/articles/${slug}/comments`);
            return result.data;
        } catch (e) {
            console.error(e);
            return e as AxiosError;
        }
    }
}