import { Models_Image} from "./shared.ts";

export type Models_Profile = {
    username: string,
    bio: string,
    image: Models_Image,
    following: boolean
}
