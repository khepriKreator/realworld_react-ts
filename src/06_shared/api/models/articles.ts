import {Models_Profile} from "./profile.ts";
import {Models_DateTime, Models_Slug} from "./shared.ts";
import {Models_TagItem} from './tags.ts'

export type Models_Article = {
    slug: Models_Slug,
    title: string,
    description: string,
    body: string,
    tagList: Models_TagItem[],
    createdAt: Models_DateTime,
    updatedAt: Models_DateTime,
    favorited: boolean,
    favoritesCount: number,
    author: Models_Profile;
}

export type Models_GetArticlesParams = {
    favorited?: boolean;
    tag?: Models_TagItem;
    author?: string;
    offset?: number;
    limit?: number;
}

export type Models_GetArticlesResult = {
    articles: Models_Article[];
    articlesCount: number;
}