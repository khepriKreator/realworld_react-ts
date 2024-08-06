import {userService} from "../services";
import {useQuery} from "@tanstack/react-query";
import {Models_User} from "../models";
import {AxiosError} from "axios";
import {QUERY_USER_KEY} from "../constants";

export const useGetUserQuery = () => {
   return useQuery<Models_User,
       AxiosError,
       Models_User
   >([QUERY_USER_KEY], () => {
       return userService.getUser()
       },
       {
           staleTime: 20000,
       }
   )
}