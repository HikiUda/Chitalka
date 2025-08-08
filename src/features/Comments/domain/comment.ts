import { ApiSchemas } from '@/shared/api/instance';

type CommentsRecord = Record<number, ApiSchemas['Comment']>;
type CommentChildrensRecord = Record<number, ApiSchemas['Comment'][]>;
type CommentUsersRecord = Record<number, ApiSchemas['CommentUser']>;

export const getCommentsRecord = (comments: ApiSchemas['Comment'][]) => {
    return comments.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
    }, {} as CommentsRecord);
};
export const getCommentChildrensRecord = (comments: CommentsRecord) => {
    return Object.values(comments).reduce((acc, comment) => {
        if (!comment.parentId) return acc;

        acc[comment.parentId] = acc[comment.parentId] ?? [];
        acc[comment.parentId].push(comment);

        return acc;
    }, {} as CommentChildrensRecord);
};

export const getCommentUsersRecord = (users: ApiSchemas['CommentUser'][]) => {
    return users.reduce((acc, user) => {
        acc[user.id] = acc[user.id] ?? user;
        return acc;
    }, {} as CommentUsersRecord);
};

export const createComment = ({
    content,
    id = 0,
    parentId,
    createdAt = new Date().toString(),
}: {
    id: number;
    createdAt?: string;
    content: string;
    parentId: number | null;
}): ApiSchemas['Comment'] => ({
    id,
    content,
    userId: null,
    parentId,
    hasChildrens: false,
    createdAt,
});

export const removeComment = (comments: CommentsRecord, id: number) => {
    const copy = { ...comments };

    if (!copy[id]) {
        return comments;
    }

    delete copy[id];

    return copy;
};
