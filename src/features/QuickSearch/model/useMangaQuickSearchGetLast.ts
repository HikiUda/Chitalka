import { authRqClient } from '@/shared/api/instance';

export function useMangaQuickSearchGetLast() {
    const { data, isLoading } = authRqClient.useQuery('get', '/quick-search/manga/last');
    return {
        data: data?.data,
        isLoading,
    };
}
