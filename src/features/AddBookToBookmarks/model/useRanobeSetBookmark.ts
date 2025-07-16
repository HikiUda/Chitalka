import { useQueryClient } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { authRqClient } from '@/shared/api/instance';
import { Bookmarks, BookIdType } from '@/shared/kernel/book';

export function useRanobeSetBookmark(ranobeId: BookIdType) {
    const queryClient = useQueryClient();
    const [optimisticBookmark, setOptimisticBookmark] = useOptimistic<Bookmarks | null>(null);
    const { mutateAsync } = authRqClient.useMutation('patch', '/ranobe/{ranobeId}/bookmark', {
        onSettled: async () => {
            await queryClient.invalidateQueries(
                authRqClient.queryOptions('get', '/ranobe/{ranobeId}/bookmark', {
                    params: { path: { ranobeId } },
                }),
            );
        },
    });

    const setBookmark = (bookmark: Bookmarks, chapterId: number | null = null) => {
        startTransition(async () => {
            setOptimisticBookmark(bookmark);
            await mutateAsync({
                params: { path: { ranobeId } },
                body: { bookmark, chapterId },
            });
        });
    };

    const getOptimisticBookmark = (
        bookmark: Bookmarks | null | undefined,
        isDeleting?: boolean,
    ) => {
        if (isDeleting) return null;
        return optimisticBookmark || bookmark;
    };

    return {
        setBookmark,
        getOptimisticBookmark,
    };
}
