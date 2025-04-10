import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { $api } from '../baseApi/kyBase';
import { AuthUserType } from './types/authTypes';
export const useLogoutQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: () => $api.delete<AuthUserType>('auth/logout'),
        onSuccess: () => {
            sessionStorage.removeItem(ACCESS_TOKEN_SESSIONSTORAGE);
            queryClient.resetQueries();
        },
    });

    return { logout: mutate.mutate };
};
