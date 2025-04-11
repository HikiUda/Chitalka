import { createDevValidator } from '@model/lib/zod/createDevValidator';
import { $api } from '../baseApi/kyBase';
import { LoginUserData } from './types/authTypes';

const validateAuth = createDevValidator(() =>
    import('./types/authTypes').then((r) => r.AuthUserScheme),
);

class Auth {
    async login(user: LoginUserData) {
        const res = await $api.post('auth/login', { json: user }).json();
        return validateAuth(res);
    }
    async logout() {
        await $api.delete('auth/logout');
    }
    async registration(user: LoginUserData) {
        const res = $api.post('auth/registration', { json: user }).json();
        return validateAuth(res);
    }
}

const AuthApi = new Auth();

export { AuthApi };
