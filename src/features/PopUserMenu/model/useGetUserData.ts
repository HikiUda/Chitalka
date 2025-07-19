import { authRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useGetUserData() {
    const { data } = authRqClient.useQuery('get', '/user');
    const profileLink = data && getRoute.PROFILE({ name: data.name, userId: data.id });
    return { data, profileLink };
}
