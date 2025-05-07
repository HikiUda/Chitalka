import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthApi } from '../authApi';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@/shared/const/sessionStorage/sessionStorage';

export const useLoginQuery = () => {
    const queryClient = useQueryClient();
    const { mutate, error, isError, isPending } = useMutation({
        mutationFn: AuthApi.login,
        onSuccess: (res) => {
            sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, res.tokens.access);
            queryClient.invalidateQueries();
        },
    });
    return { login: mutate, error, isError, isPending };
};
