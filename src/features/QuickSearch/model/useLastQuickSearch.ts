import { authRqClient } from '@/shared/api/instance';

export function useLastQuickSearch() {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/quick-search/last');
    return {
        data: data?.data,
        isLoading,
    };
}
