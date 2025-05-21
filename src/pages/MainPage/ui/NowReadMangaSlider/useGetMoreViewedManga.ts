import { publicRqClient } from '@/shared/api/instance';

export function useGetMoreViewedManga() {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga', {
        params: {
            query: {
                sortBy: 'views',
                order: 'desc',
                limit: 3,
            },
        },
    });

    return { data: data?.data, isLoading };
}
