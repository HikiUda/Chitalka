import { $api } from '@packages/model/src/api/baseApi/kyBase';

export const $apiManga = $api.extend((options) => ({ prefixUrl: `${options.prefixUrl}/manga` }));
