import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthApi } from '../authApi';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '../../baseApi/kyBase';

export const useRegistrationQuery = () => {
    const queryClient = useQueryClient();
    const { mutate, error, isError, isPending } = useMutation({
        mutationFn: AuthApi.registration,
        onSuccess: (res) => {
            sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, res.tokens.access);
            queryClient.invalidateQueries();
        },
    });

    return { registration: mutate, isError, error, isPending };
};
