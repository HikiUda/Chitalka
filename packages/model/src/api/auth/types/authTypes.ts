import { z } from 'zod';

export const LoginUserDataScheme = z.object({
    login: z.string().min(1).max(64),
    password: z.string().min(10).max(24),
});

export type LoginUserData = z.infer<typeof LoginUserDataScheme>;

export const AuthUserScheme = z.object({
    user: z.object({
        id: z.number(),
        login: z.string(),
        name: z.string(),
    }),
    tokens: z.object({
        access: z.string(),
        refresh: z.string(),
    }),
});
export type AuthUserType = z.infer<typeof AuthUserScheme>;
