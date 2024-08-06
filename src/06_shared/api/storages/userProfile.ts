import {Models_User} from "../models";
import {USER_STORAGE_KEY} from "../constants";

export const userProfileService = {
    get: () => localStorage.getItem(USER_STORAGE_KEY),
    set: (currentUser: Models_User) => localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser)),
    remove: () => localStorage.removeItem('currentUser'),
}