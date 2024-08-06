export type Models_NewUser = {
    username: string;
    email: string;
    password: string;
}

export type Models_LoginUser = {
    email: string | null;
    password: string | null;
}

export type Models_User = {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

export type Models_UpdateUser = {
    email: string;
    password: string;
    username: string;
    bio: string;
    image: string;
}