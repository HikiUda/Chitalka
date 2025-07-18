import { authRqClient } from '@/shared/api/instance';

export function useRanobeGetContinueReadList() {
    const { data, isLoading } = authRqClient.useQuery('get', '/continue-read/ranobe');

    return { data: data?.data, isLoading };
}
