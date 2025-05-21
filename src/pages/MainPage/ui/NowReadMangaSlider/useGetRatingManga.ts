import { publicRqClient } from '@/shared/api/instance';

export function useGetRatingManga() {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga', {
        params: {
            query: {
                sortBy: 'rating',
                order: 'desc',
                limit: 3,
            },
        },
    });

    return { data: data?.data, isLoading };
}
