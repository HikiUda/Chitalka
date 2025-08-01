import { createOpenApiHttp } from 'openapi-msw';
import { type ApiPaths } from '../instance';
import { CONFIG } from '@/shared/kernel/config';

export const http = createOpenApiHttp<ApiPaths>({
    baseUrl: CONFIG.API_BASE_URL,
});
