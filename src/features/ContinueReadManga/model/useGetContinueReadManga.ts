import { authRqClient } from '@/shared/api/instance';

export function useGetContinueReadManga() {
    const { data, isLoading } = authRqClient.useQuery('get', '/continue-read/manga');

    return { data: data?.data, isLoading };
}
