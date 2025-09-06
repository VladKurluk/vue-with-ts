export interface UserData {
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export type Users = User[];