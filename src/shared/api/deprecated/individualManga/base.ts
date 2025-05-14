import { $api } from '@/shared/api/deprecated/baseApi/kyBase';

export const $apiMangaById = $api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/manga/byId`,
}));
