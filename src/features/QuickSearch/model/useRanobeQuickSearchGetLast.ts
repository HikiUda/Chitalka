import { authRqClient } from '@/shared/api/instance';

export function useRanobeQuickSearchGetLast() {
    const { data, isLoading } = authRqClient.useQuery('get', '/quick-search/ranobe/last');
    return {
        data: data?.data,
        isLoading,
    };
}
