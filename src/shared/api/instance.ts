import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { components, paths } from './bekiApi';
import { useSession } from './session';

export const baseFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
});

export const fetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
});

export const rqClient = createClient(fetchClient);

export const publicFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
});

export const publicRqClient = createClient(publicFetchClient);

fetchClient.use({
    async onRequest({ request }) {
        const token = await useSession.getState().refreshToken();

        if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
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
        const token = await useSession.getState().refreshToken();
        request.headers.set('Authorization', `Bearer ${token}`);
        return request;
    },
});
