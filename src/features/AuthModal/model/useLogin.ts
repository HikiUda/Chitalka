import { useQueryClient } from '@tanstack/react-query';
import { publicRqClient } from '@/shared/api/instance';
import { useSession } from '@/shared/kernel/session';

type LoginDto = {
    login: string;
    password: string;
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    const session = useSession();

    const { mutate, isPending, error } = publicRqClient.useMutation('post', '/auth/login', {
        onSuccess: (res) => {
            session.login(res.access);
            queryClient.invalidateQueries();
        },
    });

    return { login: (data: LoginDto) => mutate({ body: { ...data } }), isPending, error };
};
