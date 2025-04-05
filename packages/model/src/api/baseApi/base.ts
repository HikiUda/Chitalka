import axios from 'axios';

import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { AuthUserType } from '@model/api/auth/types/authTypes';

export const $api = axios.create({ baseURL: __API_URL__, withCredentials: true });

$api.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN_SESSIONSTORAGE) || '';
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                await fetchIsAuth();
                return $api.request(originalRequest);
            } catch (e) {
                //TODO throw Unauthorize Error
                console.log('Unauthorize');
            }
        }
    },
);

export const fetchIsAuth = async () => {
    try {
        const response = await axios.get<AuthUserType>(`${__API_URL__}/auth/refresh`, {
            withCredentials: true,
        });
        sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, response.data.tokens.access);
        return response.data;
    } catch (e) {
        console.log(e);
        return;
    }
};
