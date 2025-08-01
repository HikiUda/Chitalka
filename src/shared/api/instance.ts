import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { CONFIG } from '../kernel/config';
import { useSessionStore } from '../kernel/session';
import { components, paths } from './bekiApi';

export type ApiSchemas = components['schemas'];
export type ApiPaths = paths;

export const authFetchClient = createFetchClient<paths>({
    baseUrl: CONFIG.API_BASE_URL,
    credentials: 'include',
});
export const authRqClient = createClient(authFetchClient);

export const publicFetchClient = createFetchClient<paths>({
    baseUrl: CONFIG.API_BASE_URL,
    credentials: 'include',
});
export const publicRqClient = createClient(publicFetchClient);

authFetchClient.use({
    async onRequest({ request }) {
        const token = await useSessionStore.getState().refreshToken();
        if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
            return request;
        } else {
            return new Response(
                JSON.stringify({
                    statusCode: 401,
                    message: 'You are not authorized to access this resource',
                } as ApiSchemas['ErrorType']),
                {
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
        }
    },
});

publicFetchClient.use({
    async onRequest({ request }) {
        const token = await useSessionStore.getState().refreshToken();
        if (token) request.headers.set('Authorization', `Bearer ${token}`);
        return request;
    },
});
