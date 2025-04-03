import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ACCESS_TOKEN_SESSIONSTORAGE } from '@model/const/sessionStorage/sessionStorage';
import { $api } from '../kyBase';
import { AuthUserType, LoginUserData } from './types/authTypes';

export const useLoginQuery = () => {
    const queryClient = useQueryClient();
    //TODO validateError
    const mutate = useMutation({
        mutationFn: (user: LoginUserData) =>
            $api.post<AuthUserType>('auth/login', { json: user }).json(),
        onSuccess: (res) => {
            sessionStorage.setItem(ACCESS_TOKEN_SESSIONSTORAGE, res.tokens.access);
            queryClient.invalidateQueries();
        },
    });
    return { login: mutate.mutate };
};
