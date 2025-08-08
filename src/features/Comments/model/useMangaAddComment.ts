import { useState } from 'react';
import { createComment } from '../domain/comment';
import { ApiSchemas, authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaAddComment(mangaId: BookId, refetch: () => Promise<void>) {
    const [addedComments, setAddedComments] = useState<ApiSchemas['Comment'][]>([]);
    const { mutateAsync } = authRqClient.useMutation('post', '/manga/{mangaId}/comments');

    const addComment = async (data: { content: string; parentId: number | null }) => {
        const newComment = createComment({
            ...data,
            id: addedComments[addedComments.length - 1].id - 1,
        });
        setAddedComments((prev) => [...prev, newComment]);
        await mutateAsync({ params: { path: { mangaId } }, body: data });
        await refetch();
        setAddedComments((prev) => prev.filter((com) => com.id !== newComment.id));
    };

    return { addedComments, addComment };
}
