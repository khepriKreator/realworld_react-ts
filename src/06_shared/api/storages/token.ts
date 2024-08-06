import {TOKEN_STORAGE_KEY} from "../constants";

export const tokenService = {
    getToken: () => {
        return localStorage.getItem(TOKEN_STORAGE_KEY);
    },
    setToken: (token: string) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
    },
    removeToken: () => {
        localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
}