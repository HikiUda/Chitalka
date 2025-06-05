import { useQueryClient } from '@tanstack/react-query';
import { publicRqClient } from '@/shared/api/instance';
import { useSession } from '@/shared/api/session';

type LoginDto = {
    login: string;
    password: string;
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    const session = useSession();

    const { mutate, isPending } = publicRqClient.useMutation('post', '/auth/login', {
        onSuccess: (res) => {
            session.login(res.tokens.access);
            queryClient.invalidateQueries();
        },
    });

    return { login: (data: LoginDto) => mutate({ body: { ...data } }), isPending };
};
