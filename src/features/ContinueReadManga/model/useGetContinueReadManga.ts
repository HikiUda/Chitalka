import { authRqClient } from '@/shared/api/instance';

export function useGetContinueReadManga() {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/continue-read');

    return { data: data?.data, isLoading };
}
