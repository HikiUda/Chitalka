import { useQueryClient } from '@tanstack/react-query';
import { useSession } from '@/shared/kernel/session';
import { publicRqClient } from '@/shared/api/instance';

type RegistrationDto = {
    login: string;
    password: string;
};

export const useRegistration = () => {
    const queryClient = useQueryClient();
    const session = useSession();

    const { mutate, isPending, error } = publicRqClient.useMutation('post', '/auth/registration', {
        onSuccess: (res) => {
            session.login(res.access);
            queryClient.invalidateQueries();
        },
    });

    return {
        registration: (data: RegistrationDto) => mutate({ body: { ...data } }),
        isPending,
        error,
    };
};
