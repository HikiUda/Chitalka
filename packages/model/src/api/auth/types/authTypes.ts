export interface AuthUserType {
    id: number;
    login: string;
    name: string;
    tokens: {
        access: string;
        refresh: string;
    };
}

export interface LoginUserData {
    login: string;
    password: string;
}
