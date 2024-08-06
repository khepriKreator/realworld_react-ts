import {Models_User, Models_LoginUser, Models_NewUser, Models_UpdateUser} from "../models";
import {apiClient} from "../apiClient.ts";
export const userService = {
    postUser: async (user: Models_LoginUser): Promise<Models_User> => {
        const result = await apiClient.post('/users/login', user);
        return result.data;
    },
    postNewUser: async (user: Models_NewUser): Promise<Models_User> => {
        const result = await apiClient.post('/users', user)
        return result.data;
    },
    getUser: async (): Promise<Models_User> => {
        const result = await apiClient.get('/user')
        return result.data;
    },
    updateUser: async (user: Models_UpdateUser): Promise<Models_User> => {
        const result = await apiClient.put('/user', user);
        return result.data;
    }

}
