import { HTTPError } from 'ky';
import { $api } from '../baseApi/kyBase';
import { LoginUserData } from './types/authTypes';
import { createZodDevValidator } from '@/shared/lib/helpers/createZodDevValidator';

const validateAuth = createZodDevValidator(() =>
    import('./types/authTypes').then((r) => r.AuthUserScheme),
);

class Auth {
    async login(user: LoginUserData) {
        try {
            const response = await $api.post('auth/login', { json: user });
            return validateAuth(await response.json());
        } catch (error) {
            if (error instanceof HTTPError) {
                const serverError = await error.response.json();
                throw new Error(serverError.message);
            }
            throw error;
        }
    }
    async logout() {
        await $api.delete('auth/logout');
    }
    async registration(user: LoginUserData) {
        try {
            const response = await $api.post('auth/registration', { json: user });
            return validateAuth(await response.json());
        } catch (error) {
            if (error instanceof HTTPError) {
                const serverError = await error.response.json();
                throw new Error(serverError.message);
            }
            throw error;
        }
    }
}

const AuthApi = new Auth();

export { AuthApi };
