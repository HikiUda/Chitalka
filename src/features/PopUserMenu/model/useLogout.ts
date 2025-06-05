import { useQueryClient } from '@tanstack/react-query';
import { useSession } from '@/shared/api/session';
import { authRqClient } from '@/shared/api/instance';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const session = useSession();

    const { mutate, isPending } = authRqClient.useMutation('delete', '/auth/logout', {
        onSuccess: () => {
            session.logout();
            queryClient.resetQueries();
        },
    });

    return { logout: () => mutate({}), isPending };
};
