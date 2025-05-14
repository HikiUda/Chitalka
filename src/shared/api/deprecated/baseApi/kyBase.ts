import ky, { Options } from 'ky';
import { AuthUserType } from '../auth/types/authTypes';

interface CustomOptions extends Options {
    _retry?: boolean;
}

export const ACCESS_TOKEN_SESSIONSTORAGE = 'accessToken';

export const $api = ky.create({
    prefixUrl: __API_URL__,
    credentials: 'include',
    hooks: {
        beforeRequest: [
            (request) => {
                const accessToken = sessionStorage.getItem(ACCESS_TOKEN_SESSIONSTORAGE);
                if (accessToken) {
                    request.headers.set('Authorization', `Bearer ${accessToken}`);
                }
            },
        ],
        afterResponse: [
            async (request, options: CustomOptions, response) => {
                if (response.status === 401 && !options._retry) {
                    try {
                        const user = await fetchIsAuth();
                        if (user) {
                            return $api(request, { ...options, _retry: true } as CustomOptions);
                        }
                    } catch (e) {
                        console.log('❌ Unauthorized, logging out...');
                    }
                }
            },
        ],
    },
});

const fetchIsAuth = async () => {
    try {
        const response = await ky
            .get<AuthUserType>(`auth/refresh`, {
                prefixUrl: __API_URL__,
                credentials: 'include',
            })
            .json();
        sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, response.tokens.access);
        return response;
    } catch (e) {
        console.log('⚠️ Token refresh failed:');
        return null;
    }
};
