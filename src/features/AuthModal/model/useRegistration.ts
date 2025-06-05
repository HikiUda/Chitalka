import { useQueryClient } from '@tanstack/react-query';
import { useSession } from '@/shared/api/session';
import { publicRqClient } from '@/shared/api/instance';

type RegistrationDto = {
    login: string;
    password: string;
};

export const useRegistration = () => {
    const queryClient = useQueryClient();
    const session = useSession();

    const { mutate, isPending } = publicRqClient.useMutation('post', '/auth/registration', {
        onSuccess: (res) => {
            session.login(res.tokens.access);
            queryClient.invalidateQueries();
        },
    });

    return {
        login: (data: RegistrationDto) => mutate({ body: { ...data } }),
        isPending,
    };
};
