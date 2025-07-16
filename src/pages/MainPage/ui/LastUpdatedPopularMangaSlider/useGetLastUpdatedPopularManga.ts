import { publicRqClient } from '@/shared/api/instance';

export function useGetLastUpdatedPopularManga() {
    const { data, isLoading } = publicRqClient.useQuery('get', '/last-updated/manga', {
        params: {
            query: {
                scope: 'popular',
                limit: 15,
            },
        },
    });

    return { data: data?.data, isLoading };
}
