import { $api } from '@/shared/api/baseApi/kyBase';

export const $apiMangaById = $api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/manga/byId`,
}));
