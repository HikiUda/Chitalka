import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { components, paths } from './bekiApi';
import { useSessionStore } from './session';

export type ApiSchemas = components['schemas'];

export const baseFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
    credentials: 'include',
});

export const authFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
    credentials: 'include',
});

export const authRqClient = createClient(authFetchClient);

export const publicFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
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
                } as components['schemas']['ErrorType']),
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
        request.headers.set('Authorization', `Bearer ${token}`);
        return request;
    },
});
