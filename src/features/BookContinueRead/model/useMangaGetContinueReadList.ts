import { authRqClient } from '@/shared/api/instance';

export function useMangaGetContinueReadList() {
    const { data, isLoading } = authRqClient.useQuery('get', '/continue-read/manga');

    return { data: data?.data, isLoading };
}
