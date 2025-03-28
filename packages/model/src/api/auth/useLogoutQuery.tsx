import { QueryCache, useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { $api } from '../base';
import { AuthUserType } from './types/authTypes';
const queryCache = new QueryCache();
export const useLogoutQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: () => $api.post<AuthUserType>('/auth/logout'),
        onSuccess: () => {
            sessionStorage.removeItem(ACCESS_TOKEN_SESSIONSTORAGE);
            queryCache.clear();
            queryClient.invalidateQueries();
        },
    });

    return { logout: mutate.mutate };
};
