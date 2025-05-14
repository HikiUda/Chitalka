import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import { paths } from './bekiApi';

export const fetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
});

export const rqClient = createClient(fetchClient);

export const publicFetchClient = createFetchClient<paths>({
    baseUrl: __API_URL__,
});
