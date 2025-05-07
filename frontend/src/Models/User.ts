export type UserProfileToken = {
    token: string;
}

export type LoginProps = {
    email: string;
    password: string;
}

export type RegisterProps = {
    name: string | null;
    email: string;
    password: string;
}