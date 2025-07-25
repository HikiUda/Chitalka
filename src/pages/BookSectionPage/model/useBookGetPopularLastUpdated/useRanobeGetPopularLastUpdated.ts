import { publicRqClient } from '@/shared/api/instance';

export function useRanobeGetPopularLastUpdated() {
    const { data, isLoading } = publicRqClient.useQuery('get', '/last-updated/ranobe', {
        params: {
            query: {
                scope: 'popular',
                limit: 15,
            },
        },
    });

    return { data: data?.data || [], isLoading };
}
