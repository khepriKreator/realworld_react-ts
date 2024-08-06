import {useMutation} from "@tanstack/react-query";
import {Models_NewUser, Models_User} from "../models";
import {userService} from "../services";
import {AxiosError} from "axios";


export const usePostUser = (user: Models_NewUser) => {
    return useMutation<Models_User,
        AxiosError,
        Models_User
    >( () => userService.postNewUser(user));
}