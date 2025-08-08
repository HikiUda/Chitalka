import { useMemo } from 'react';
import {
    getCommentsRecord,
    getCommentChildrensRecord,
    getCommentUsersRecord,
} from '../domain/comment';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaRepliesComments(
    mangaId: BookId,
    commentId: number,
    enabled: boolean = true,
) {
    const { data, isFetchingNextPage, fetchNextPage, refetch } = publicRqClient.useInfiniteQuery(
        'get',
        '/manga/{mangaId}/comments/{commentId}/replies',
        {
            params: {
                path: {
                    mangaId,
                    commentId,
                },
                query: {
                    depthLimit: 1,
                },
            },
        },
        {
            initialPageParam: 1,
            pageParamName: 'depthStep',
            getNextPageParam: (data) => data.nextPage,
            enabled,
        },
    );

    const [comments, commentChildrens] = useMemo(() => {
        const comments = getCommentsRecord(data?.pages.flatMap((page) => page.data) || []);
        const commentChildrens = getCommentChildrensRecord(comments);
        return [comments, commentChildrens];
    }, [data]);

    const users = useMemo(() => {
        return getCommentUsersRecord(data?.pages.flatMap((page) => page.users) || []);
    }, [data]);

    const getComments = (commentId: number) => {
        return commentChildrens[commentId] ?? [];
    };

    const getCommentUser = (userId: number | null) => {
        return (userId && users[userId]) || null;
    };

    const handleFetchNextPage = (commentId: number) => {
        const comment = comments[commentId];
        if (comment.hasChildrens && !getComments(commentId).length) {
            fetchNextPage();
        }
    };

    const isRepliesFetching = (commentId: number) => {
        const comment = comments[commentId];
        if (comment.hasChildrens && !getComments(commentId).length) {
            return isFetchingNextPage;
        }
        return false;
    };

    return {
        getComments,
        getCommentUser,
        isRepliesFetching,
        fetchNextPage: handleFetchNextPage,
    };
}
