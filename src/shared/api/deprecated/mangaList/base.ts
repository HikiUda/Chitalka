import { $api } from '@/shared/api/deprecated/baseApi/kyBase';

export const $apiManga = $api.extend((options) => ({ prefixUrl: `${options.prefixUrl}/manga` }));
