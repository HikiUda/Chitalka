import { publicRqClient } from '@/shared/api/instance';

export function useGetNewManga() {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga', {
        params: {
            query: {
                sortBy: 'createDate',
                order: 'desc',
                limit: 3,
            },
        },
    });

    return { data: data?.data, isLoading };
}
