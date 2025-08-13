import { useMangaRepliesComments } from '../model/useMangaRepliesComments';
import { useExpandedComments } from '../model/useExpandedComments';
import { useMangaReplyComment } from '../model/useMangaReplayComment';
import { SinglComment } from './SinglComment';
import { CommentForm } from './CommentForm';
import { cn } from '@/shared/lib/css';
import { ApiSchemas } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export type MangaRootCommentProps = {
    className?: string;
    mangaId: BookId;
    comment: ApiSchemas['Comment'];
    user: ApiSchemas['CommentUser'] | null;
};

export const MangaRootComment = (props: MangaRootCommentProps) => {
    const { className, comment, user, mangaId } = props;
    const { getCommentUser, getComments, fetchNextPage, isRepliesFetching } =
        useMangaRepliesComments(mangaId, comment.id, comment.hasChildrens);
    const { isExpanded, toggleExpanded } = useExpandedComments(fetchNextPage);
    const { replyCommentId, onReply } = useMangaReplyComment();

    const renderComments = (comment: ApiSchemas['Comment']) => (
        <SinglComment
            key={comment.id}
            isExpanded={isExpanded(comment.id)}
            onToggleExpanded={toggleExpanded}
            comment={comment}
            user={getCommentUser(comment.userId)}
            replies={getComments(comment.id).map(renderComments)}
            isRepliesFetching={isRepliesFetching(comment.id)}
            replyForm={<CommentForm />}
            onReply={onReply}
            isReplyNow={replyCommentId === comment.id}
        />
    );

    return (
        <SinglComment
            isExpanded={isExpanded(comment.id)}
            onToggleExpanded={toggleExpanded}
            className={cn('p-4 pb-2', className)}
            comment={comment}
            user={user}
            replies={getComments(comment.id).map(renderComments)}
            isRepliesFetching={false}
            replyForm={<CommentForm />}
            onReply={onReply}
            isReplyNow={replyCommentId === comment.id}
        />
    );
};
