import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { $api } from '../baseApi/kyBase';
import { AuthUserType, LoginUserData } from './types/authTypes';

export const useRegistrationQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (user: LoginUserData) =>
            $api.post<AuthUserType>('auth/registration', { json: user }).json(),
        onSuccess: (res) => {
            sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, res.tokens.access);
            queryClient.invalidateQueries();
        },
    });

    return { registration: mutate.mutate };
};
