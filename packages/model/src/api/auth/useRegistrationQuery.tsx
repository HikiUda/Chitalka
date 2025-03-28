import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { $api } from '../base';
import { AuthUserType, LoginUserData } from './types/authTypes';

export const useRegistrationQuery = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (user: LoginUserData) => $api.post<AuthUserType>('/auth/registration', user),
        onSuccess: (res) => {
            sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, res.data.tokens.access);
            queryClient.invalidateQueries();
        },
    });

    return { registration: mutate.mutate };
};
