import {Models_Profile} from "./profile.ts";

export type Models_Comment = {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: Models_Profile;
}