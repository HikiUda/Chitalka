import { authRqClient } from '@/shared/api/instance';

export function useUserData() {
    const { data } = authRqClient.useQuery('get', '/user');
    return { data };
}
