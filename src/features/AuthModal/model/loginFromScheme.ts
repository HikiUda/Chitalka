import { z } from 'zod';
import { LoginUserDataScheme } from '@/shared/api/auth';

const noEmpty = (val: string) => (val.trim() === '' ? undefined : val);

const LoginFromScheme = z
    .object({
        login: z.string().transform(noEmpty),
        password: z.string().transform(noEmpty),
    })
    .pipe(LoginUserDataScheme);

export type LoginFromType = z.infer<typeof LoginFromScheme>;

export const validateLoginForm = (loginForm: LoginFromType) => {
    const res = LoginFromScheme.safeParse(loginForm);
    if (res.success) {
        return undefined;
    }
    return res.error.flatten();
};
