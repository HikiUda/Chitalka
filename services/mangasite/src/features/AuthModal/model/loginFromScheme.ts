import { LoginUserDataScheme } from '@packages/model/src/api/auth';
import { emptyStringToUndefined } from '@packages/model/src/lib/helpers/emptyStringToUndefined';
import { z } from 'zod';

const LoginFromScheme = z
    .object({
        login: z.string().transform(emptyStringToUndefined),
        password: z.string().transform(emptyStringToUndefined),
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
