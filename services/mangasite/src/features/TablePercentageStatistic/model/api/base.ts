import { $api } from '@packages/model/src/api/baseApi/kyBase';

export const $apiMangaStatistic = $api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/manga/statistic`,
}));
