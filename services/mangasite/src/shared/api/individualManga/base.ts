import { $api } from '@packages/model/src/api/baseApi/kyBase';

export const $apiMangaById = $api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/manga/byId`,
}));
