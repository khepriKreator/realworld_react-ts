import axios from 'axios';


const host = 'https://api.realworld.io/api';
const AUTH_TOKEN_NAME = 'AUTHORIZATION';

export const apiClient = axios.create({
    baseURL: host,
});

export const setTokenToRequestHeader = (token?: string) => {
    if (token) {
        apiClient.defaults.headers.common[AUTH_TOKEN_NAME] = token;
    } else {
        delete apiClient.defaults.headers.common[AUTH_TOKEN_NAME];
    }
}
