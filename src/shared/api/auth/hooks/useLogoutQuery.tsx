import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthApi } from '../authApi';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '../../baseApi/kyBase';
export const useLogoutQuery = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: AuthApi.logout,
        onSuccess: () => {
            sessionStorage.removeItem(ACCESS_TOKEN_SESSIONSTORAGE);
            queryClient.resetQueries();
        },
    });

    return { logout: mutate, isPending };
};
