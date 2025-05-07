import { $api } from '@/shared/api/baseApi/kyBase';

export const $apiManga = $api.extend((options) => ({ prefixUrl: `${options.prefixUrl}/manga` }));
