import { useQueryClient } from '@tanstack/react-query';
import { authRqClient } from '@/shared/api/instance';

export function useDeleteContinueReadManga() {
    const queryClient = useQueryClient();
    const { mutate, isPending, variables } = authRqClient.useMutation(
        'patch',
        '/manga/continue-read/{id}',
        {
            onSettled: () =>
                queryClient.invalidateQueries(authRqClient.useQuery('get', '/manga/continue-read')),
            onSuccess: (_, { params }) => {
                const mangas = queryClient.getQueryData(
                    authRqClient.queryOptions('get', '/manga/continue-read').queryKey,
                ) as { id: number }[];
                if (mangas) {
                    const setData =
                        params.path.id === 0
                            ? []
                            : mangas.filter((manga) => manga.id !== params.path.id);
                    queryClient.setQueryData(
                        authRqClient.queryOptions('get', '/manga/continue-read').queryKey,
                        setData,
                    );
                }
            },
        },
    );

    return {
        deleteContinueReadManga: (id: number) => mutate({ params: { path: { id: 0 } } }),
        getIsPending: (id: number) =>
            (isPending && variables.params.path.id === id) || variables?.params.path.id === 0,
    };
}
