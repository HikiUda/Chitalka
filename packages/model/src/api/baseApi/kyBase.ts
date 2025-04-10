import ky, { Options } from 'ky';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { AuthUserType } from '@model/api/auth/types/authTypes';

interface CustomOptions extends Options {
    _retry?: boolean;
}

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

export const $apiManga = $api.extend((options) => ({ prefixUrl: `${options.prefixUrl}/manga` }));

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
        console.log('⚠️ Token refresh failed:', e);
        return null;
    }
};
