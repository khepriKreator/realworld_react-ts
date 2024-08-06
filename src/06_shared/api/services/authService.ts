import {Models_LoginUser, Models_User, Models_NewUser, Models_UpdateUser} from "../models";
import {apiClient} from "../apiClient.ts";

export const authService = {
    postUser: async({email, password}: Models_LoginUser):Promise<Models_User> => {
        const result = await apiClient.post('/users/login', {
            user: {
                email,
                password,
            }
        })
        return result.data;
    },
    postNewUser: async({username, email, password}: Models_NewUser):Promise<Models_User> => {
        const result = await apiClient.post('/users', {
            user: {
                username,
                email,
                password,
            }
        })
        return result.data;
    },
    getUser: async ():Promise<Models_User> => {
        const result = await apiClient.get('/user')
        return result.data;
    },
    updateUser: async ({email, password, username, bio, image}: Models_UpdateUser): Promise<Models_User> => {
        const result = await apiClient.put('/user', {
            user: {
                email,
                password,
                username,
                bio,
                image,
            }
        })
        return result.data;
    }
}