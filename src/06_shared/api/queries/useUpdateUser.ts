import {useMutation} from "@tanstack/react-query";
import {Models_UpdateUser, Models_User} from "../models";
import {userService} from "../services";
import {AxiosError} from "axios";


export const usePostUser = (user: Models_UpdateUser) => {
    return useMutation<Models_User,
        AxiosError,
        Models_User
    >( () => userService.updateUser(user));
}