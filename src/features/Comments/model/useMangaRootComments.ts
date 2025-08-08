import { useMemo } from 'react';
import { getCommentUsersRecord } from '../domain/comment';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaRootComments(mangaId: BookId) {
    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
        publicRqClient.useInfiniteQuery(
            'get',
            '/manga/{mangaId}/comments',
            {
                params: {
                    path: {
                        mangaId,
                    },
                    query: {
                        limit: 20,
                    },
                },
            },
            {
                initialPageParam: 1,
                pageParamName: 'page',
                getNextPageParam: (data) => data.nextPage,
            },
        );

    const comments = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) || [];
    }, [data]);

    const users = useMemo(() => {
        return getCommentUsersRecord(data?.pages.flatMap((page) => page.users) || []);
    }, [data]);

    const getCommentUser = (userId: number | null) => {
        return (userId && users[userId]) || null;
    };

    return {
        comments,
        getCommentUser,
        isFetching: isFetching || isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    };
}
