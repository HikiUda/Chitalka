import { $api } from '@/shared/api/deprecated/baseApi/kyBase';

export const $apiMangaStatistic = $api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/manga/statistic`,
}));
